const formidable = require("formidable")
const {log} = require("debug");
const path = require("path");
const fs = require('fs')
const md5 =require('js-md5')
const fileController = {
    upLoad: async (req,res)=>{
        //文件夹下已有文件的名称
        let dirFilesName = fs.readdirSync('./public/upfiles/');
        let form = new formidable.IncomingForm();
        form.encoding = 'utf-8' // 编码
        form.keepExtensions = true // 保留扩展名
        form.uploadDir = path.join(__dirname,'../public/upfiles/') // 文件存储路径
        form.parse(req,(err,data,files)=>{
            if (err) {
                return res.json({
                    code:0,
                    message:err
                })
            }
            let oldPath = files.file.filepath; //上传文件的原始地址
            let fileName = files.file.originalFilename; //上传文件的原始名称
            let fileMd5 = md5(fs.readFileSync(oldPath)); //文件MD5信息
            let newName = `${fileMd5}.${fileName.split('.')[1]}`; //文件重命名为MD5字符串为名称后缀为文件类型
            // 校验服务器中是否存在相同文件
            if (!dirFilesName.includes(newName.toString())){
                let newPath = path.join(path.dirname(oldPath),newName)
                fs.rename(oldPath,newPath,(err)=>{
                    if (err){
                        return res.json({
                            code:0,
                            message:err
                        })
                    }
                    res.json({
                        code:200,
                        message:newName
                    })
                })
            }else{
                // 删除上传的文件
                fs.unlink(oldPath,(err)=>{
                   if(err){
                       throw err;
                   }
                });
                res.json({
                    code:201,
                    message:newName
                })
            }
        })
    },

    download: async (req,res)=>{
        console.log(req.query.name)
        res.download(`./public/upfiles/${req.query.name}`,req.query.name.toString())
    }
}

module.exports = fileController
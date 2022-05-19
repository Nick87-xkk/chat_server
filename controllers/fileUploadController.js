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
            let oldPath = files.file.filepath;
            let fileName = files.file.originalFilename;

            let fileMd5 = md5(fs.readFileSync(oldPath));
            let newName = `${fileMd5}.${fileName.split('.')[1]}`;
            // 查询文件是否存在
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
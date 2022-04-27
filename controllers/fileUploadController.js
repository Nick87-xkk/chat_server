const formidable = require("formidable")
const {log} = require("debug");
const path = require("path");
const fs = require('fs')
const fileController = {
    upLoad: async (req,res)=>{
        let form = new formidable.IncomingForm();
        form.encoding = 'utf-8' // 编码
        form.keepExtensions = true // 保留扩展名
        form.uploadDir = path.join(__dirname,'../public/upfiles/') // 文件存储路径
        form.parse(req,(err,fileds,files)=>{
            if (err) {
                return res.json({
                    code:0,
                    message:err
                })
            }

            let oldPath = files.file.filepath;
            let fileName = files.file.originalFilename;

            let newPath = path.join(path.dirname(oldPath),fileName)

            fs.rename(oldPath,newPath,(err)=>{
                if (err){
                    return res.json({
                        code:0,
                        message:err
                    })
                }
                res.json({
                    code:200,
                    message:"up success"
                })
            })
            /*console.log(fileds);
            console.log(files);*/

        })
    }
}

module.exports = fileController
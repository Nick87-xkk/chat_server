var mongo = require('mongodb').MongoClient

const MONGO_URL = "mongodb://nick87:12138@49.232.185.124:27017/?authSource=admin"

// test insert data
let insertObj = {
    test:'node连接',
    origin:'公司'
}

// 关闭数据库操作放到最后一组函数中
mongo.connect(MONGO_URL,(err1,conn)=>{
    if(err1) throw err1;
    const db = conn.db('mongo-test-1');
    // find 操作
    db.collection('col').find().toArray((err2,data) => {
        if(err2) throw err;
        console.log(data)
        
        // 操作完数据库后，一定要记得关闭
        conn.close();
      })

      //insert操作
    /*db.collection('col').insertOne(insertObj,(err3,res)=>{
        if(err3) throw err3;
        console.log(res);
        conn.close();
    })*/

    /*
    *updata操作
    *insertObj 源数据
    *updatastr 要更新的数据
    */ 
    /*db.collection('col').updateOne(insertObj,updatastr,(err,res)=>{
        if(err3) throw err3;
        console.log(res);
        conn.close();
    })*/

    // delete操作
    /*db.collection('col').deleteOne(insertObj,(err3,res)=>{
        if(err3) throw err3;
        console.log(res);
        conn.close();
    })*/

});
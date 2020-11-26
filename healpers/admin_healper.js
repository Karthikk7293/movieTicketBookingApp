var db = require('../config/connection')
var collection = require('../config/collection')
const { ObjectId } = require('mongodb')
const bcrypt =require('bcrypt')
const { response } = require('express')

module.exports={

    inseartAdminDetails:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            //console.log('api call from admin',adminData.email);
            adminData.password=await bcrypt.hash(adminData.password,10)
            db.get().collection(collection.ADMIN_DETAILS).insertOne(adminData).then((data)=>{
                resolve(data.ops[0])
            })
        })
    },
    doLogin:(adminData=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let admin = await db.get().collection(collection.ADMIN_DETAILS).findOne({email:adminData.email})
            if(admin){
                bcrypt.compare(adminData.password,admin.password).then((status)=>{
                    if(status){
                        console.log('login success')
                        response.admin=admin
                        response.status=true
                        resolve(response)
                    }else{
                        console.log('login failed');
                        resolve({status:false})
                    }
                })
            }else{
                console.log('login failed');
                resolve({status:false})
            }
        })
    })

}
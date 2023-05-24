var db = require('./dbconfig')

const {Op} = require('sequelize')

const {Sequelize} = require('sequelize');
const url = require('./models/url')(db.sequelize,db.Sequelize);




const generateShortUrl = () =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = '';

    for(let i=0; i<6; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters.charAt(randomIndex);
    }
    return shortUrl;
}


module.exports = {
    urls: async function (dataReq){
        try{
            const originalUrl = dataReq.originalUrl;
            let shortUrl = generateShortUrl(originalUrl);
            let existingUrl = await url.findAll({where: {"shortUrl":shortUrl}});

            if(existingUrl){
                return existingUrl;
            }else{
                var upload = url.create({
                    "originalUrl":originalUrl,
                    "shortUrl": shortUrl
                })
                upload.save().then((data)=>{
                    console.log("data",data)
                    return (data);
                }).catch((e)=>{
                    console.log('error',e);
                    return (e);
                })
            }     
        }catch(e){
            console.log("error",e);
            return e;
        }
    }
}
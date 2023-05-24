const database = require("./databases");

module.exports.shortUrl = async(event)=>{
    console.log("inside handler");
    try{
        var res = await database.urls(JSON.parse(event.body))
        console.log(res);
        return {
            body: JSON.stringify(res)
        }
    }catch(e){

        console.log("error",e)
        return {
            body:JSON.stringify(res)
        }
    }

}
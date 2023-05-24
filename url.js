module.exports = function(sequelize, DataTypes){
    return sequelize.define('url',{
        originalUrl:{
            type: DataTypes.STRING(255),
            required: true
        },
        shortUrl: {
            type: DataTypes.STRING(255),
            
        }
        
    }, {
        tableName : 'url' 
    });
};
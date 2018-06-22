const Sequelize = require('sequelize');

const db=new Sequelize("shop_db",'shoppers','pass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})

const User = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false,
    }
})

const Product = db.define('products',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull:false
    },

    manufacturer:Sequelize.STRING,

    price:{
        type: Sequelize.FLOAT,
        allowNull:false,
        defaultValue: 0.0
    }

})

const Cart=db.define('cart',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      
    },

    name: {
        type: Sequelize.STRING,
        allowNull:false
    },

    manufacturer:Sequelize.STRING,

    price:{
        type: Sequelize.FLOAT,
        allowNull:false,
        defaultValue: 0.0
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
})

db.sync()
    .then(()=>console.log('database is synced'))
    .catch((err)=>console.log("error creating database"))

exports=module.exports=
{
    User,Product,Cart
}
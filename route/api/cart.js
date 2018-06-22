const Cart=require('../../db').Cart
const Product=require('../../db').Product
const route=require('express').Router();

route.get('/',(req,res)=>{
   Cart.findAll()
  .then((mycart)=>
    res.status(201).send(mycart))
  
   })
 
 route.post('/',(req,res)=>{
 
    let nme= req.body.name;
    var tempid=0;
 
    Product.findAll({
        where: {
          name: nme
        }
      })
      .then((product)=>{
        Cart.findAll({
            where:{
                name:product[0].dataValues.name
            }
        }).then((mynewcart)=>{
            if(mynewcart.length===0)
             {
                Cart.create({

                    name:product[0].dataValues.name,
                     manufacturer:product[0].dataValues.manufacturer,
                     price:product[0].dataValues.price,
                     quantity:1,
                   
                   })
                   alert("item added to cart");  
             }
               else{
                Cart.update(
                    {
                        quantity:mynewcart[0].dataValues.quantity+1
                     } /* set attributes' value */, 
                    { where: {  name:product[0].dataValues.name }} /* where criteria */
              )
              alert("item added to cart");
               }
        })
        .catch((error)=>{
           console.log("some error in retrive");
        })
               
                 
                })
        
    })
    
     
            

  
exports=module.exports=route;
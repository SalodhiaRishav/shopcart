
function createProductCard(product)
{
    return $(`
    <li class="row p-3 m-1 listitem">
    <div class="col-5">
    ${product.name}
   </div>
   <div class="col-4">
   ${product.manufacturer}
        </div>
        <div class="col-1">
        ${product.price}
                </div>
                <div class="col-1">
                ${product.quantity}
                        </div>
                        <div class="col-1">
                        ${product.price*product.quantity}
                        </div>
</li>
    
    </div>  
    `)
}
function gotohome()
{
    window.location = "http://localhost:4567/"
}
$(function()
{
    let productlist=$('#productlist')
    console.log(productlist);
    $.get('/api/cart',function(data){
     
        productlist.empty()
        let totalamount=0;
        for(product of data)
        {
            productlist.append(createProductCard(product));
            totalamount=totalamount+(product.price*product.quantity)
        }
        productlist.append(`
        <li class="row p-3 m-1 listitem">
        <div class="col-6">
       
       </div>
       <div class="col-3">
       Total Amount : 
      </div>
      <div class="col-3">
      ${totalamount}
     </div>
       </li>
        `)
     })

})
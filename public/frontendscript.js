function fetchProducts(done)
{
    $.get('/api/products',function(data){
        done(data)
    })
}



function addproducttocart(event)
{
    let name=event.target.parentElement.parentElement.children[0].innerText;
  
    console.log(name)
  
    $.post('/api/cart',
    {
     name:name,
 
    },
    function(data)
    {
      console.log("data sent");
    }
)
alert("item added to cart");
}

function createProductCard(product)
{
    return $(`
     <div class="col-4 card mx-2 p-2">
        <h4 class="product-name" id="pdname">${product.name}</h4>     
        <div class="prodduct-manufacturer" id="mnfctrs">
             ${product.manufacturer}
        </div>
        <div class="row">
            <div class="col m-3 p-3">
            <div id="">Rs.${product.price}</div> 
            </div> 
            <button class="col btn btn-primary m-3" onclick="addproducttocart(event)">AddToCart</button>
        </div>
    
    </div>  
    `)
}

function gotocart()
{
    window.location = "http://localhost:4567/mycart.html"
}

function gotoadmin()
{
    window.location = "http://localhost:4567/addproducts.html"
}

$(function()
{
    let productlist=$('#product-list')
    
    fetchProducts(function (products)
    {
        productlist.empty()
        for(product of products)
        {
            productlist.append(createProductCard(product));
        }
    })
   
  
  
})
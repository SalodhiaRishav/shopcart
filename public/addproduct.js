function addnewproducts(prname,mnf,prc,done)
{
    $.post('/api/products',
    {
       name:prname,
       manufacturer:mnf,
       price:prc
    },
    function(data)
    {
        done(data);
    }
)}

function gotocart()
{
    window.location = "http://localhost:4567/mycart.html"
}

function gotohome()
{
    window.location = "http://localhost:4567/"
}


$(function(){
  let  prodname=$('#productname');
  let mnfctr=$('#manufacturer');
  let price=$('#price');
  $('#mybutton').click(function(){
    addnewproducts(
        prodname.val(),
        mnfctr.val(),
        price.val(),
        function(addedproduct)
        {
           
            window.alert(addedproduct.name + 'added to database');
        }
    )
  }) 
  
})
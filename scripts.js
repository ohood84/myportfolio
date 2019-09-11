$(document).ready(function(){
  var smallPrice=6;medPrice=8;largePrice=10,finalTotal=0,pizzacounter=0;
function Customer(){
  this.customers=[];
}

Customer.prototype.addCustomer=function(customer){
  this.customers.push(customer);
}

var newcustomer=new Customer();

function PizzaOrders() {
  this.pizzas=[];
  this.totalCost=0;
  this.name;
  this.pizzacounter=0;
}

var userPizzaOrders= new PizzaOrders();

PizzaOrders.prototype.addPizza=function(pizza){
  this.pizzas.push(pizza);
  this.pizzacounter++;
 alert("pizza number"+this.pizzacounter)
 console.log(pizza.toppingSauce[1]);
}


function Pizza(){
  this.toppingSauce=[];
  this.toppingVeggi=[];
  this.toppingMeat=[];
  this.size;
  this.cost;
}


Pizza.prototype.addToppingandSize=function(userMeatTopping ,userSauceTopping,userVeggiTopping,size,quantity){
  this.toppingSauce=userSauceTopping;
  this.toppingVeggi=userVeggiTopping;
  this.toppingMeat=userMeatTopping;
  this.size=size;
  this.cost=0;
  this.quantity=quantity;
}

Pizza.prototype.pizzaCost=function(){
  // var cost;
  switch (this.size) {
    case"Large":{
      this.cost=this.quantity*largePrice;
      return this.cost;
      break;}
    case"Medium":
    {  this.cost=this.quantity*medPrice;
      return this.cost;
      break;}
    case"Small":
     { this.cost=this.quantity*smallPrice;
     return this.cost;
      break;
    }

  }
  alert("hello")
   // $("#pizza-orders").append("cost is :"+ this.cost);
 }

var textOrder=function(pizza){
  $("#pizza-orders").append(
    //order Contents :<br>"+
     pizza.quantity+"x"+pizza.size+" Your own Pizza <br>"+pizza.Name+"<br>"+"Sub Total is "+"$"+
     (pizza.pizzaCost()) +"<br>");
     finalTotal+=pizza.pizzaCost();

}


 var textTopping=function(pizza){

   $("#pizza-orders").append("<ul>your Sauce topping:");
      pizza.toppingSauce.forEach(function(topp){
        $("#pizza-orders").append("<li>"+topp+"</li>");
      });
   $("#pizza-orders").append("</ul>");


    $("#pizza-orders").append("<ul>your Meat topping:");
      pizza.toppingMeat.forEach(function(topp){
             $("#pizza-orders").append("<li>"+topp+"</li>");
      });
    $("#pizza-orders").append("</ul>");


     $("#pizza-orders").append("<ul>your Veggies topping:");
        pizza.toppingVeggi.forEach(function(topp){
          $("#pizza-orders").append("<li>"+topp+"</li>");
        });
      $("#pizza-orders").append("</ul>");

 }



     $("#addpizza").click(function(event){
         var userSauceTopping=[];
         var userVeggiTopping=[];
         var userMeatTopping=[];
         var name,size;
          var userPizza = new Pizza();
          $("input:checkbox[name=sauce]:checked").each(function(){
            var sauce1 = $(this).val();
            userSauceTopping.push(sauce1);
          });

          $("input:checkbox[name=meat]:checked").each(function(){
            var meat1= $(this).val();
            userMeatTopping.push(meat1);
          });

          $("input:checkbox[name=Veggies]:checked").each(function(){
            var veggi = $(this).val();
            userVeggiTopping.push(veggi);
          });

           name=$("input#name").val();
           size=$("input:radio[name=size]:checked").val();
           var quantity=parseInt($("input#quantity").val());
           userPizza.pizzaCost();

           userPizza.addToppingandSize(userMeatTopping ,userSauceTopping,userVeggiTopping,size,quantity);
            // textOrder(userPizza);
            // textTopping(userPizza);
           console.log(userPizza);


           userPizzaOrders.addPizza(userPizza);
           userPizzaOrders.totalCost+= userPizza.pizzaCost();
           console.log(userPizzaOrders);
           newcustomer.addCustomer( userPizzaOrders);



         userPizzaOrders.pizzas.forEach(function(pizza) {
           // textOrder(pizza);
           // $("#pizza-orders").append("<li>" + pizza.size+ "</li>");
         // $("#pizza-orders").append("<li>" + pizza.size+ "</li>");
         // $("#pizza-orders").append("<li>" + x.pizzas[0].size+ "</li>");

      //    // debugger;
      });
          event.preventDefault();
          resetFields();
    });



   $("#checkout").click(function(event){
     // $("#pizza-orders").show();
     $("#pizza-top").hide();
     $("#pizza-orders").show();


     $("#pizza-orders").append("Total is $:"+(userPizzaOrders.totalCost).toFixed(2));
     $("#pizza-orders").append("<li>You order " + pizzacounter + " pizza</li>");
      console.log(pizzacounter);
      console.log(userPizzaOrders);
        userPizzaOrders.pizzas.forEach(function(pizza) {
          $("#pizza-orders").append("<li>" + pizza.size+ "</li>");
          // $("#pizza-orders").append("<li>You order " + pizzacounter + " pizza</li>");

          textOrder(pizza);
          console.log(pizza);
        // $("#pizza-orders").append("<li>" + pizza.size+ "</li>");
        // $("#pizza-orders").append("<li>" + x.pizzas[0].size+ "</li>");

     //    // debugger;

     });




     event.preventDefault();
       });

   // // })
   // $("#pizza-orders").hover(
   //   function(){
   //     $("#pizza-topping").slideDown();
   //   },
   //   function(){
   //      $("#pizza-topping").slideUp();
   //
   //   }
   // );

    function resetFields(){
      $("#pizza-top")[0].reset();
      // $("#pizza-orders").empty();
    }



    // $("#result").slideDown();
   });

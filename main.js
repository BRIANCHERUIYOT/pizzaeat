const Pizza=function(size,crust,toppings) {
 this.size = size;
 this.crust = crust;
 this.toppings = toppings;

//  creating a funtion that will use the above constructor to return their total sum ""
    Pizza.prototype.Tprice = function(){
     alert("am called");
    return this.size + this.crust + this.toppings   
}

}


// let pizzone = new Pizza(400,500,100);
// let answer = (pizzone.Tprice())
// alert(answer)

$(document).ready(function() {

    let total = 0;
    $("#Add").click(function() {
    let Ppizza = parseInt($("#size option:selected").val());
    let Ptopping = parseInt($("#top option:selected").val());
    let Pcrust = parseInt($("#crust option:selected").val()); 

    
    // to create a new instance of a pizza we'll use the above created constructor to create a new instance 
    let new_order = new Pizza(Ppizza, Pcrust, Ptopping);
    
    let price = (new_order.Tprice())
    alert(price)
    // console.log(price)
    total += parseInt(price);
    alert(total)

    })
});

// const pizza = function() {
// alert(hello man)
// }
const Pizza=function(name,size,crust,toppings) {
 this.name = name;
 this.size = size;
 this.crust = crust;
 this.toppings = toppings;

let pizzone = new Pizza(name,size,crust,toppings)
console.log(pizzone);
}

Pizza('Meatpizza', 'medium','suasage','cream');

// $(document).ready(function() {
//     // let pizza = document.getElementById.value();
//     // event.preventDefault();
//     $("#Add").click(function() {
//     let Ppizza = parseInt($("#size option:selected").val());
//     let Ptopping = parseInt($("#top option:selected").val());
//     let Pcrust = parseInt($("#size option:selected").val());

//         alert(Ppizza);
//         // console.log("i am clicked" + pizza);
//         alert("I am clicked")
//     Pizza('Meatpizza', 'medium','suasage','cream');
        

//     })
// });

// const pizza = function() {
// alert(hello man)
// }
const sizes=["Small", "Medium","Large"];
function variety(name , image, information){
    this.name =name;
    this .image=image;
    this.information= information;

    this.prices={
        "Large":1000,
        "Medium":800,
        "Small":500,
  }
}
function crusts( name,price ){
    this.name=name;
    this.price=price;
}
function toppings( name,price ){
    this.name=name;
    this.price=price;
}

const pizzalist =[
    new variety("Veggie Pizza"),
    new variety(" Meat Pizza"),
    new variety("Margherita Pizza")
];
 
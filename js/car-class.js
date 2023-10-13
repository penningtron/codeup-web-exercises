class Car {
    constructor(make,model,year,color,fueltype,price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fueltype = fueltype;
        this.price = price;


    }
    purchase(){
        console.log(`You purchased a ${this.year} - ${this.make} - ${this.model}- for $ ${this.price}.`)
    }

    sell(){
        console.log(`You sold your ${this.year} - ${this.make} - ${this.model} - for $ ${this.price}`)
    }


}

let car1 = new Car("toyota","tacoma",2003,"silver","gas",10000);
let car2 = new Car("subaru", "outback", 2018, "white", "gas", 20000);


car1.purchase()
car2.sell()
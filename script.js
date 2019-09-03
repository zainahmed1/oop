let choco = chocolateFactory();
function chocolateFactory(chocoName, type, color, sugar, cost, calories, size) {
    let myChocolate = {
        name: chocoName,
        chocolateType: type,
        colorOfChocolate: color,
        isSugar: sugar,
        costOfChocolate: cost,
        noOfCalories: calories,
        chocoSize: size,
        getChocolate(like) {
            console.log(`my favorate chocolate is ${this.name}`);
        }
    }
    return myChocolate;
}







let shoe = shoeFactory();
function shoeFactory(variety, brand, year, season, color, gender1, gender2) {
    let myShoe = {
        materialVariety: variety,
        brandName: brand,
        collectionYear: year,
        collectionSeason: season,
        color: color,
        isLadiesOrGents: gender1,
        isBabaOrBaby: gender2,
        getShoe(item) {
            console.log(`buy two piece of this price ${costPerPiece} get 50% discount`)
        },
        greet(forUs) {
            console.log(`hope you like ${brandName}`)
        }
    }
    return myShoe;
}
let oil = oilFactory();
function oilFactory(brand, choices, design, size, kg) {
    let myOil = {
        oilBrand: brand,
        oilChoice: choices,
        oilDesign: design,
        howMuchSize: size,
        howMuchKg: kg,
        getOil(item) {
            console.log(`${this.oilBrand} this oil brand is good for kids and your life `);
        },
        Data(about) {
            console.log(`${this.oilDesign} this design new market and his ${this.size} better for your family. `)
        }
    }
    return myOil;
}
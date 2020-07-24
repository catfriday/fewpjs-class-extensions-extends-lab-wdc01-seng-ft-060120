class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length 
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return this.sides.reduce(reducer)
    }
}

class Triangle extends Polygon {

    get isValid() {

        // if (!Array.isArray(this.sides)) return;
        // if (this.count !== 3) return;
    //     let side1 = this.sides[0]
    //     let side2 = this.sides[1]
    //     let side3 = this.sides[2]
    //     return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    //   }
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
    return ((a + b > c) && (a + c > b) && (b + c > a)) 
    // if ((a + b > c || a + c > b || b + c > a))
        // return 
        //     true
    }
}

class Square extends Polygon {

    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
    return ((a === b ) && (a === c) && (a === d))
        // return true
    }

    get area() {
        return this.sides[0]**2
    }
}

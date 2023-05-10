class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    
    perimeter(){
        let sum = 0;
        for (const number of this.sides)
            sum += number
        return sum;
    }
}
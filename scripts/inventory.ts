export abstract class Pig {

    constructor(public name:string, public category:string, public breed:string, public height:number, 
        public weight:number, public personality: string, public attr_key:string, public attr_value: string | number) {
          
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.attr_key = attr_key;
        this.attr_value = attr_value;
    }
    
}

export class GreyPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
}

export class ChestnutPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: string) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
}

export class WhitePig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);

    }
}

export class BlackPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);

    }
}

export enum pigType {
    grey = "Grey",
    chestnut = "Chestnut",
    white = "White",
    black = "Black"
}

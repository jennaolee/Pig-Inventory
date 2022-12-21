"use strict";

// import {Pig, GreyPig, ChestnutPig, BlackPig, WhitePig, pigType} from './inventory'

abstract class Pig {

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

class GreyPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
}

class ChestnutPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: string) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
}

class WhitePig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);

    }
}

class BlackPig extends Pig {

    constructor(name:string, category:string, breed:string, height:number, weight:number, personality: string, attr_key:string, attr_value: number) {
        super(name, category, breed, height, weight, personality, attr_key, attr_value);

    }
}

enum pigType {
    grey = "Grey",
    chestnut = "Chestnut",
    white = "White",
    black = "Black"
}

// load pigs when the window is reloaded
window.onload = function () {
    loadPigs();
}

// global indexes to keep track of table positions
var black_table_index : number = 1;
var chestnut_table_index : number = 1;
var grey_table_index : number = 1;
var white_table_index : number = 1;

// uploads the information of the given pig and displays the information table
function openInfo(pigName:string) {
    uploadPigInfo(pigName);
    document.getElementById("info-table")!.style.display = "block";
}

// closes the information
function closeInfo() {
    document.getElementById("info-table")!.style.display = "none";
}

// opens the add form
function openAdd() {
    document.getElementById("add-form")!.style.display = "block";
}

// closes the add form
function closeAdd() {
    document.getElementById("add-form")!.style.display = "none";
}

// checks if the breed has been selected
function breedIsSelected() : boolean {
    let categoryValue : string = (<HTMLInputElement>document.getElementById("category")).value;

    let greyBreedValue : string = (<HTMLInputElement>document.getElementById("grey-breed")).value;
    let chestnutBreedValue : string = (<HTMLInputElement>document.getElementById("chestnut-breed")).value;
    let whiteBreedValue : string = (<HTMLInputElement>document.getElementById("white-breed")).value;
    let blackBreedValue : string = (<HTMLInputElement>document.getElementById("black-breed")).value;

    let greyEmpty : boolean = (categoryValue == pigType.grey) && (greyBreedValue != "Select a Breed");
    let chestnutEmpty : boolean = (categoryValue == pigType.chestnut) && (chestnutBreedValue != "Select a Breed");
    let whiteEmpty : boolean = (categoryValue == pigType.white) && (whiteBreedValue != "Select a Breed");
    let blackEmpty : boolean = (categoryValue == pigType.black) && (blackBreedValue != "Select a Breed");

    return greyEmpty || chestnutEmpty || whiteEmpty || blackEmpty;
}

// checks if the dynamic attribute is given the correct input
function correctAttributeValue() : boolean {
    let attrInputValue : string = (<HTMLInputElement>document.getElementById("attr-input")).value;
    let categoryValue : string = (<HTMLInputElement>document.getElementById("category")).value;

    let attrEmpty : boolean = (attrInputValue != "");
    let greyEmpty : boolean = (categoryValue == pigType.grey) && (Number(attrInputValue) >= 0 &&Number(attrInputValue) <= 100);
    let chestnutEmpty : boolean = (categoryValue == pigType.chestnut) && (attrInputValue != "");
    let whiteEmpty : boolean = (categoryValue == pigType.white) && (Number(attrInputValue) >= 0 &&Number(attrInputValue) <= 100);
    let blackEmpty : boolean = (categoryValue == pigType.black) && (Number(attrInputValue) >= 0 && Number(attrInputValue) <= 10 );
    
    return  attrEmpty && (greyEmpty || chestnutEmpty || whiteEmpty || blackEmpty);
}

// checks that all input is valid before allowing the user to submit the pig information
function validateForm() {
    let nameValue : string = (<HTMLInputElement>document.getElementById("name")).value;
    let categoryValue : string = (<HTMLInputElement>document.getElementById("category")).value;
    let heightValue : string = (<HTMLInputElement>document.getElementById("height")).value;
    let weightValue : string = (<HTMLInputElement>document.getElementById("weight")).value;
    let personalityValue : string = (<HTMLInputElement>document.getElementById("personality")).value;

    // check that all input is valid
    if((nameValue != "") && (categoryValue != "Select a Category") && (breedIsSelected() == true) && 
    (heightValue != "") && (weightValue != "") && (personalityValue != "") && (correctAttributeValue() == true)) {
        // enable user to submit valid information only
        (<HTMLInputElement>document.getElementById("submit-pig")).disabled = false;
    } else {
        // user cannot submit invalid information
        (<HTMLInputElement>document.getElementById("submit-pig")).disabled = true;
    }

}

// displays the correct attribute for each pig category
function selectBreed() : string {
    // user can only see one option at a time
    document.getElementById("grey-breed")!.style.display = "none";
    document.getElementById("chestnut-breed")!.style.display = "none";
    document.getElementById("white-breed")!.style.display = "none";
    document.getElementById("black-breed")!.style.display = "none";
    document.getElementById("attr-label")!.style.display = "block";
    document.getElementById("attr-input")!.style.display = "block";
    let input : HTMLInputElement = (<HTMLInputElement>document.getElementById("attr-input"));
    let label : HTMLInputElement = (<HTMLInputElement>document.getElementById("attr-label"));

    let category : string = (<HTMLInputElement>document.getElementById("category"))!.value;
    let breed :string = "";

    // checks the category and displays the appropriate formatted input option while removing the other options
    if(category == pigType.grey) {
        document.getElementById("grey-breed")!.style.display = "block";

        (<HTMLInputElement>document.getElementById("grey-breed")).disabled = false;
        breed = (<HTMLInputElement>document.getElementById("grey-breed")).value;

        label.innerHTML = "Swimming Abilities";
        input.max = "100";
        input.type = "number";
        input.placeholder = "0-100";

    } else if(category == pigType.chestnut) {
        document.getElementById("chestnut-breed")!.style.display = "block";
        (<HTMLInputElement>document.getElementById("chestnut-breed")).disabled = false;
        breed = (<HTMLInputElement>document.getElementById("chestnut-breed")).value;

        label.innerHTML = "Language";
        input.type = "text";
        input.placeholder = "Language";

    } else if(category == pigType.white) {
        document.getElementById("white-breed")!.style.display = "block";
        (<HTMLInputElement>document.getElementById("white-breed")).disabled = false;
        breed = (<HTMLInputElement>document.getElementById("white-breed")).value;

        label.innerHTML = "Running Abilities";
        input.max = "100";
        input.type = "number";
        input.placeholder = "0-100";


    } else if(category == pigType.black) {
        document.getElementById("black-breed")!.style.display = "block";
        (<HTMLInputElement>document.getElementById("black-breed")).disabled = false;
        breed = (<HTMLInputElement>document.getElementById("black-breed")).value;

        label.innerHTML = "Strength";
        input.max = "10";
        input.type = "number";
        input.placeholder = "0-10";
    }

    // makes sure that the input is valid
    validateForm();

    // returns the breed as a string
    return breed;
}

// capitalizes the first letter for sorting purposes
function capitalizeFirstLetter(pigName:string) : string {
    return pigName.charAt(0).toUpperCase() + pigName.slice(1);
}

// creates the appropriate pig
function createPig() : Pig {
    let name : string = capitalizeFirstLetter((<HTMLInputElement>document.getElementById("name")).value);
    let category : string = (<HTMLInputElement>document.getElementById("category")).value;
    let breed : string = selectBreed();
    let height : number = Number((<HTMLInputElement>document.getElementById("height")).value);
    let weight : number = Number((<HTMLInputElement>document.getElementById("weight")).value);
    let personality : string = capitalizeFirstLetter((<HTMLInputElement>document.getElementById("personality")).value);
    let attr_key :string = (<HTMLInputElement>document.getElementById("attr-label")).value;
    let attr_value : string | number = (<HTMLInputElement>document.getElementById("attr-input")).value;

    // checks the pig category and creates the correct pig with the correct attribute key and value
    if(category == pigType.grey) {
        attr_value = Number((<HTMLInputElement>document.getElementById("attr-input")).value);
        attr_key = "Swimming Abilities";
        return new GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value);

    } else if(category == pigType.chestnut) {
        attr_value = capitalizeFirstLetter((<HTMLInputElement>document.getElementById("attr-input")).value);
        attr_key = "Language";
        return new ChestnutPig(name, category, breed, height, weight, personality, attr_key, attr_value);

    } else if(category == pigType.white) {
        attr_value = Number((<HTMLInputElement>document.getElementById("attr-input")).value);
        attr_key = "Running Abilities";
        return new WhitePig(name, category, breed, height, weight, personality, attr_key, attr_value);

    } else if(category == pigType.black) {
        attr_value = Number((<HTMLInputElement>document.getElementById("attr-input")).value);
        attr_key = "Strength";
        return new BlackPig(name, category, breed, height, weight, personality, attr_key, attr_value);

    } else { // will not get called due to measures taken to ensure valid input
        window.alert("Please select a pig category to continue");
        attr_value = Number((<HTMLInputElement>document.getElementById("attr-input")).value);
        return new GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }

}

// stores the newly created pig in local storage
function storePig() : string {
    let pig : Pig = createPig();
    let pigName : string = pig.name;
    localStorage.setItem(pigName, JSON.stringify(pig)); // works!
    return pigName;
}

// stores the pig in local storage and displays it in the table
function addPig() {
    storePig();
    let newPig = createPig()!;
    addPigToTable(newPig);
}

// sorts the pigs my name alphabetically 
function SortLocalStorage(){
    let localStorageArray = new Array();
    if(localStorage.length > 0){
       
       for (let i=0;i<localStorage.length;i++){
           localStorageArray[i] = localStorage.getItem(localStorage.key(i)!);
       }
    }
    let sortedArray = localStorageArray.sort();

    return sortedArray;  
}


// checks the pig category and adds the pig to the correct index in the table
function addPigToTable(myPig:any) {
    let table = (document.getElementById("black-pig-table") as HTMLTableElement);
    let row = table.insertRow(black_table_index);

    // finds the correct index and creates a row
    if(myPig.category == pigType.black) {
        table = (document.getElementById("black-pig-table") as HTMLTableElement);
        row = table.insertRow(black_table_index++);

    } else if(myPig.category == pigType.chestnut) {
        table = (document.getElementById("chestnut-pig-table") as HTMLTableElement);
        row = table.insertRow(chestnut_table_index++);

    } else if(myPig.category == pigType.grey) {
        table = (document.getElementById("grey-pig-table") as HTMLTableElement);
        row = table.insertRow(grey_table_index++);

    } else {
        table = (document.getElementById("white-pig-table") as HTMLTableElement);
        row = table.insertRow(white_table_index++);
    }

    // creates the cells
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);

    // display name and category in first two cells
    cell0.innerHTML = myPig.name;
    cell1.innerHTML = myPig.category;

    // create the more info button with functionality and append it to the table
    let moreInfoBtn = document.createElement("input");
    moreInfoBtn.type = "button";
    moreInfoBtn.className = "more-info-btn";
    moreInfoBtn.id = "more-info-btn";
    moreInfoBtn.value = "More Info"
    moreInfoBtn.onclick = function () {
        openInfo(myPig.name);
    }
    cell2.appendChild(moreInfoBtn);

    // create the delete button with functionality and append it to the table
    let deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.id = "delete-btn";
    deleteBtn.value = "Delete"
    deleteBtn.onclick = function () {
        deletePig(myPig.name);
    }
    cell3.appendChild(deleteBtn);
}

// load the pigs from localStorage and display in table
function loadPigs() {
   
    // sort the pigs by name
    let sortedArray = SortLocalStorage();
    let len = sortedArray.length;

    // add the pig to the table in alphabetical order
    for (let i = 0; i < len; i++ ) {
        
        let pig : string = sortedArray[i];
        let myPig = JSON.parse(pig!);
        addPigToTable(myPig);
    }

}

// display pig info to the more info popup
function uploadPigInfo(pigName: string) {
    
    // get pig from local storage and parse it
    let pig = localStorage.getItem(pigName);
    let myPig = JSON.parse(pig!);

    // extract and write info to document
    document.getElementById("name-info")!.innerHTML = myPig.name;
    document.getElementById("category-info")!.innerHTML = myPig.category;
    document.getElementById("breed-info")!.innerHTML = myPig.breed;
    document.getElementById("height-info")!.innerHTML = String(myPig.height);
    document.getElementById("weight-info")!.innerHTML = String(myPig.weight);
    document.getElementById("personality-info")!.innerHTML = myPig.personality;
    document.getElementById("attr-heading")!.innerHTML = myPig.attr_key;
    document.getElementById("attr-info")!.innerHTML = String(myPig.attr_value);

}

// deletes the pig from local storage and removes it from the table
function deletePig(pigName: string) : boolean {
    let message:string = "Do you want to delete this pig?";
    if(confirm(message) == true) {
       localStorage.removeItem(pigName);
        location.reload();
        return false; 
    } else {
        return false
    }
    

}

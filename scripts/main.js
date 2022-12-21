"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import {Pig, GreyPig, ChestnutPig, BlackPig, WhitePig, pigType} from './inventory'
var Pig = /** @class */ (function () {
    function Pig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.attr_key = attr_key;
        this.attr_value = attr_value;
        this.name = name;
        this.category = category;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.attr_key = attr_key;
        this.attr_value = attr_value;
    }
    return Pig;
}());
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return GreyPig;
}(Pig));
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return ChestnutPig;
}(Pig));
var WhitePig = /** @class */ (function (_super) {
    __extends(WhitePig, _super);
    function WhitePig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return WhitePig;
}(Pig));
var BlackPig = /** @class */ (function (_super) {
    __extends(BlackPig, _super);
    function BlackPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return BlackPig;
}(Pig));
var pigType;
(function (pigType) {
    pigType["grey"] = "Grey";
    pigType["chestnut"] = "Chestnut";
    pigType["white"] = "White";
    pigType["black"] = "Black";
})(pigType || (pigType = {}));
// load pigs when the window is reloaded
window.onload = function () {
    loadPigs();
};
// global indexes to keep track of table positions
var black_table_index = 1;
var chestnut_table_index = 1;
var grey_table_index = 1;
var white_table_index = 1;
// uploads the information of the given pig and displays the information table
function openInfo(pigName) {
    uploadPigInfo(pigName);
    document.getElementById("info-table").style.display = "block";
}
// closes the information
function closeInfo() {
    document.getElementById("info-table").style.display = "none";
}
// opens the add form
function openAdd() {
    document.getElementById("add-form").style.display = "block";
}
// closes the add form
function closeAdd() {
    document.getElementById("add-form").style.display = "none";
}
// checks if the breed has been selected
function breedIsSelected() {
    var categoryValue = document.getElementById("category").value;
    var greyBreedValue = document.getElementById("grey-breed").value;
    var chestnutBreedValue = document.getElementById("chestnut-breed").value;
    var whiteBreedValue = document.getElementById("white-breed").value;
    var blackBreedValue = document.getElementById("black-breed").value;
    var greyEmpty = (categoryValue == pigType.grey) && (greyBreedValue != "Select a Breed");
    var chestnutEmpty = (categoryValue == pigType.chestnut) && (chestnutBreedValue != "Select a Breed");
    var whiteEmpty = (categoryValue == pigType.white) && (whiteBreedValue != "Select a Breed");
    var blackEmpty = (categoryValue == pigType.black) && (blackBreedValue != "Select a Breed");
    return greyEmpty || chestnutEmpty || whiteEmpty || blackEmpty;
}
// checks if the dynamic attribute is given the correct input
function correctAttributeValue() {
    var attrInputValue = document.getElementById("attr-input").value;
    var categoryValue = document.getElementById("category").value;
    var attrEmpty = (attrInputValue != "");
    var greyEmpty = (categoryValue == pigType.grey) && (Number(attrInputValue) >= 0 && Number(attrInputValue) <= 100);
    var chestnutEmpty = (categoryValue == pigType.chestnut) && (attrInputValue != "");
    var whiteEmpty = (categoryValue == pigType.white) && (Number(attrInputValue) >= 0 && Number(attrInputValue) <= 100);
    var blackEmpty = (categoryValue == pigType.black) && (Number(attrInputValue) >= 0 && Number(attrInputValue) <= 10);
    return attrEmpty && (greyEmpty || chestnutEmpty || whiteEmpty || blackEmpty);
}
// checks that all input is valid before allowing the user to submit the pig information
function validateForm() {
    var nameValue = document.getElementById("name").value;
    var categoryValue = document.getElementById("category").value;
    var heightValue = document.getElementById("height").value;
    var weightValue = document.getElementById("weight").value;
    var personalityValue = document.getElementById("personality").value;
    // check that all input is valid
    if ((nameValue != "") && (categoryValue != "Select a Category") && (breedIsSelected() == true) &&
        (heightValue != "") && (weightValue != "") && (personalityValue != "") && (correctAttributeValue() == true)) {
        // enable user to submit valid information only
        document.getElementById("submit-pig").disabled = false;
    }
    else {
        // user cannot submit invalid information
        document.getElementById("submit-pig").disabled = true;
    }
}
// displays the correct attribute for each pig category
function selectBreed() {
    // user can only see one option at a time
    document.getElementById("grey-breed").style.display = "none";
    document.getElementById("chestnut-breed").style.display = "none";
    document.getElementById("white-breed").style.display = "none";
    document.getElementById("black-breed").style.display = "none";
    document.getElementById("attr-label").style.display = "block";
    document.getElementById("attr-input").style.display = "block";
    var input = document.getElementById("attr-input");
    var label = document.getElementById("attr-label");
    var category = document.getElementById("category").value;
    var breed = "";
    // checks the category and displays the appropriate formatted input option while removing the other options
    if (category == pigType.grey) {
        document.getElementById("grey-breed").style.display = "block";
        document.getElementById("grey-breed").disabled = false;
        breed = document.getElementById("grey-breed").value;
        label.innerHTML = "Swimming Abilities";
        input.max = "100";
        input.type = "number";
        input.placeholder = "0-100";
    }
    else if (category == pigType.chestnut) {
        document.getElementById("chestnut-breed").style.display = "block";
        document.getElementById("chestnut-breed").disabled = false;
        breed = document.getElementById("chestnut-breed").value;
        label.innerHTML = "Language";
        input.type = "text";
        input.placeholder = "Language";
    }
    else if (category == pigType.white) {
        document.getElementById("white-breed").style.display = "block";
        document.getElementById("white-breed").disabled = false;
        breed = document.getElementById("white-breed").value;
        label.innerHTML = "Running Abilities";
        input.max = "100";
        input.type = "number";
        input.placeholder = "0-100";
    }
    else if (category == pigType.black) {
        document.getElementById("black-breed").style.display = "block";
        document.getElementById("black-breed").disabled = false;
        breed = document.getElementById("black-breed").value;
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
function capitalizeFirstLetter(pigName) {
    return pigName.charAt(0).toUpperCase() + pigName.slice(1);
}
// creates the appropriate pig
function createPig() {
    var name = capitalizeFirstLetter(document.getElementById("name").value);
    var category = document.getElementById("category").value;
    var breed = selectBreed();
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var personality = capitalizeFirstLetter(document.getElementById("personality").value);
    var attr_key = document.getElementById("attr-label").value;
    var attr_value = document.getElementById("attr-input").value;
    // checks the pig category and creates the correct pig with the correct attribute key and value
    if (category == pigType.grey) {
        attr_value = Number(document.getElementById("attr-input").value);
        attr_key = "Swimming Abilities";
        return new GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
    else if (category == pigType.chestnut) {
        attr_value = capitalizeFirstLetter(document.getElementById("attr-input").value);
        attr_key = "Language";
        return new ChestnutPig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
    else if (category == pigType.white) {
        attr_value = Number(document.getElementById("attr-input").value);
        attr_key = "Running Abilities";
        return new WhitePig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
    else if (category == pigType.black) {
        attr_value = Number(document.getElementById("attr-input").value);
        attr_key = "Strength";
        return new BlackPig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
    else { // will not get called due to measures taken to ensure valid input
        window.alert("Please select a pig category to continue");
        attr_value = Number(document.getElementById("attr-input").value);
        return new GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value);
    }
}
// stores the newly created pig in local storage
function storePig() {
    var pig = createPig();
    var pigName = pig.name;
    localStorage.setItem(pigName, JSON.stringify(pig)); // works!
    return pigName;
}
// stores the pig in local storage and displays it in the table
function addPig() {
    storePig();
    var newPig = createPig();
    addPigToTable(newPig);
}
// sorts the pigs my name alphabetically 
function SortLocalStorage() {
    var localStorageArray = new Array();
    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = localStorage.getItem(localStorage.key(i));
        }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;
}
// checks the pig category and adds the pig to the correct index in the table
function addPigToTable(myPig) {
    var table = document.getElementById("black-pig-table");
    var row = table.insertRow(black_table_index);
    // finds the correct index and creates a row
    if (myPig.category == pigType.black) {
        table = document.getElementById("black-pig-table");
        row = table.insertRow(black_table_index++);
    }
    else if (myPig.category == pigType.chestnut) {
        table = document.getElementById("chestnut-pig-table");
        row = table.insertRow(chestnut_table_index++);
    }
    else if (myPig.category == pigType.grey) {
        table = document.getElementById("grey-pig-table");
        row = table.insertRow(grey_table_index++);
    }
    else {
        table = document.getElementById("white-pig-table");
        row = table.insertRow(white_table_index++);
    }
    // creates the cells
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    // display name and category in first two cells
    cell0.innerHTML = myPig.name;
    cell1.innerHTML = myPig.category;
    // create the more info button with functionality and append it to the table
    var moreInfoBtn = document.createElement("input");
    moreInfoBtn.type = "button";
    moreInfoBtn.className = "more-info-btn";
    moreInfoBtn.id = "more-info-btn";
    moreInfoBtn.value = "More Info";
    moreInfoBtn.onclick = function () {
        openInfo(myPig.name);
    };
    cell2.appendChild(moreInfoBtn);
    // create the delete button with functionality and append it to the table
    var deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.id = "delete-btn";
    deleteBtn.value = "Delete";
    deleteBtn.onclick = function () {
        deletePig(myPig.name);
    };
    cell3.appendChild(deleteBtn);
}
// load the pigs from localStorage and display in table
function loadPigs() {
    // sort the pigs by name
    var sortedArray = SortLocalStorage();
    var len = sortedArray.length;
    // add the pig to the table in alphabetical order
    for (var i = 0; i < len; i++) {
        var pig = sortedArray[i];
        var myPig = JSON.parse(pig);
        addPigToTable(myPig);
    }
}
// display pig info to the more info popup
function uploadPigInfo(pigName) {
    // get pig from local storage and parse it
    var pig = localStorage.getItem(pigName);
    var myPig = JSON.parse(pig);
    // extract and write info to document
    document.getElementById("name-info").innerHTML = myPig.name;
    document.getElementById("category-info").innerHTML = myPig.category;
    document.getElementById("breed-info").innerHTML = myPig.breed;
    document.getElementById("height-info").innerHTML = String(myPig.height);
    document.getElementById("weight-info").innerHTML = String(myPig.weight);
    document.getElementById("personality-info").innerHTML = myPig.personality;
    document.getElementById("attr-heading").innerHTML = myPig.attr_key;
    document.getElementById("attr-info").innerHTML = String(myPig.attr_value);
}
// deletes the pig from local storage and removes it from the table
function deletePig(pigName) {
    var message = "Do you want to delete this pig?";
    if (confirm(message) == true) {
        localStorage.removeItem(pigName);
        location.reload();
        return false;
    }
    else {
        return false;
    }
}

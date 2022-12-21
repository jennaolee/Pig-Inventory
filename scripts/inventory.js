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
exports.__esModule = true;
exports.pigType = exports.BlackPig = exports.WhitePig = exports.ChestnutPig = exports.GreyPig = exports.Pig = void 0;
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
exports.Pig = Pig;
var GreyPig = /** @class */ (function (_super) {
    __extends(GreyPig, _super);
    function GreyPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return GreyPig;
}(Pig));
exports.GreyPig = GreyPig;
var ChestnutPig = /** @class */ (function (_super) {
    __extends(ChestnutPig, _super);
    function ChestnutPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return ChestnutPig;
}(Pig));
exports.ChestnutPig = ChestnutPig;
var WhitePig = /** @class */ (function (_super) {
    __extends(WhitePig, _super);
    function WhitePig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return WhitePig;
}(Pig));
exports.WhitePig = WhitePig;
var BlackPig = /** @class */ (function (_super) {
    __extends(BlackPig, _super);
    function BlackPig(name, category, breed, height, weight, personality, attr_key, attr_value) {
        return _super.call(this, name, category, breed, height, weight, personality, attr_key, attr_value) || this;
    }
    return BlackPig;
}(Pig));
exports.BlackPig = BlackPig;
var pigType;
(function (pigType) {
    pigType["grey"] = "Grey";
    pigType["chestnut"] = "Chestnut";
    pigType["white"] = "White";
    pigType["black"] = "Black";
})(pigType = exports.pigType || (exports.pigType = {}));

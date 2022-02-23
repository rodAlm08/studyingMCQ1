"use strict";
exports.__esModule = true;
var toDo = /** @class */ (function () {
    function toDo() {
        this.arrayOfItems = [];
    }
    toDo.prototype.addTask = function (task) {
        this.arrayOfItems.push(task);
        return this.arrayOfItems.length;
    };
    toDo.prototype.displayArray = function () {
        for (var i = 0; i < this.arrayOfItems.length; i++) {
            console.log("The item " + i + " of the array is " + this.arrayOfItems[i]);
        }
    };
    toDo.prototype.deleteTask = function (task) {
        var index = this.arrayOfItems.indexOf(task);
        if (index > -1) {
            this.arrayOfItems.splice(index, 1);
            console.log("The item " + task + " was delete from array!");
        }
        return this.arrayOfItems.length;
    };
    toDo.prototype.deleteTaskByindex = function (ArrayIndex) {
        var item = this.arrayOfItems[ArrayIndex].toString();
        if (ArrayIndex > -1 && ArrayIndex < this.arrayOfItems.length) {
            this.arrayOfItems.splice(ArrayIndex, 1);
            console.log("The item " + item + " was delete from array!");
        }
        else {
            console.log("The index you want dosen't exist");
        }
        return this.arrayOfItems.length;
    };
    return toDo;
}());
var myTodos = new toDo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.addTask('awake');
myTodos.displayArray();
myTodos.deleteTaskByindex(0);
myTodos.displayArray();

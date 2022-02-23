import { toDoInterface } from "./interface"; 


class toDo implements toDoInterface{

    constructor(){

    }

    arrayOfItems:Array<string>=[];
    
addTask(task:string):number{
    this.arrayOfItems.push(task);
    
    return this.arrayOfItems.length;
}

displayArray():void{
    
    for(let i=0;i<this.arrayOfItems.length;i++){
        console.log("The item "+i+" of the array is "+ this.arrayOfItems[i]);
    }
}

deleteTask(task:string):number{

    let index:number = this.arrayOfItems.indexOf(task);
    if(index>-1){
        this.arrayOfItems.splice(index,1);
        console.log("The item "+task+" was delete from array!");
    }

    return this.arrayOfItems.length;
}

deleteTaskByindex(ArrayIndex:number):number{

    let item:string = this.arrayOfItems[ArrayIndex].toString();
    if(ArrayIndex >-1 && ArrayIndex < this.arrayOfItems.length ){
        this.arrayOfItems.splice(ArrayIndex,1);
        console.log("The item "+ item+ " was delete from array!");
    }else{
        console.log("The index you want dosen't exist");
    }

    return this.arrayOfItems.length;
}

}

let myTodos = new toDo();

myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.addTask('awake');
myTodos.displayArray();
myTodos.deleteTaskByindex(0);
myTodos.displayArray();
export interface toDoInterface{
    arrayOfItems:Array<string>;
    addTask(task:string):number;
    displayArray():void;
    deleteTask(task:string):number;
    deleteTaskByindex(ArrayIndex:number):number;

}
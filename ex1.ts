

let arrayOfItems:Array<String>= new Array;

function addTask(task:string):number{
    arrayOfItems.push(task);
    
    return arrayOfItems.length;
}

function displayArray():void{
    
    for(let i=0;i<arrayOfItems.length;i++){
        console.log("The item "+i+" of the array is "+arrayOfItems[i]);
    }
}


function deleteTask(task:string):number{

    let index:number = arrayOfItems.indexOf(task);
    if(index>-1){
        arrayOfItems.splice(index,1);
        console.log("The item "+task+" was delete from array!");
    }

    return arrayOfItems.length;
}


function deleteTaskByindex(ArrayIndex:number):number{

    let item:string = arrayOfItems[ArrayIndex].toString();
    if(ArrayIndex >-1 && ArrayIndex < arrayOfItems.length ){
        arrayOfItems.splice(ArrayIndex,1);
        console.log("The item "+ item+ " was delete from array!");
    }else{
        console.log("The index you want dosen't exist");
    }

    return arrayOfItems.length;
}

addTask("Rodrigo");
addTask("Ana");
addTask("Sarah");
displayArray();
deleteTaskByindex(0);
displayArray();
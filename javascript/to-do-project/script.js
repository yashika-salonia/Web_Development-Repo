let todoList=[
    {
        item:'buy milk',
        dueDate:'4/10/2025'
    },
    {
        item:'drink water',
        dueDate:'1/03/2025'
    }];
displayItems();

function addTodo(){
    let inputElement=document.querySelector("#todo-input");

    let dateElement=document.querySelector("#todo-date");

    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    
    //add to list vales in an array
    todoList.push({item: todoItem, dueDate: todoDate});

    //after adding making the imput element blank
    inputElement.value='';
    dateElement.value='';

    displayItems();
}

function displayItems(){
    let containerElm=document.querySelector('.todo-container');

    let newHtml='';

    for(let i=0;i<todoList.length;i++){
        // let item=todoList[i].item;
        // let dueDate=todoList[i].dueDate;
        let {item,dueDate}=todoList[i];
        newHtml+=`
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="dlt-btn" onclick="todoList.splice(${i},1);
            displayItems();
            ">Delete</button>
        `;
    }
    containerElm.innerHTML=newHtml;
}


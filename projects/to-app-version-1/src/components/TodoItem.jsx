function TodoItem() {
    let todoName1='Visit to clinic';
    let todoDate1='09/03/2025';
    let todoName2='Buy Milk';
    let todoDate2='10/03/2025';

    return (
        <div className="container">
            <div className="row todo-row">
                <div className="col-4">{todoName1}</div>
                <div className="col-4">{todoDate1}</div>
                <div className="col-2">
                <button type="button" className="btn btn-danger todo-button">
                    Delete
                </button>
                </div>
            </div>

            <div className="row todo-row">
                <div className="col-4">{todoName2}</div>
                <div className="col-4">{todoDate2}</div>
                <div className="col-2">
                <button type="button" className="btn btn-danger todo-button">
                    Delete
                </button>
                </div>
            </div>
        </div>
  );
}

export default TodoItem;

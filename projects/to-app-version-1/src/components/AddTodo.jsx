function AddTodo() {
  return (
    <div class="container text-center">
      <div className="row todo-row">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;

class TodoList extends ReactObs {

  updateState () {
    this.setState({
      tasks: this.state.tasks
    });
  }

  constructor (props) {
    super(props);
    this.on("registTask", this.registTask, this);
    this.completeTask.bind(this);
    this.state = {
      tasks: []
    }
    this.idCounter = this.state.tasks.length;
  }

  completeTask(i, e) {
    e.preventDefault();
    let task = this.state.tasks.splice(i, 1);
    this.trigger("completeTask", task[0].title);
    this.updateState();
  }

  registTask(_this, text) {
    _this.state.tasks.push({
      id: _this.idCounter, title: text
    });
    _this.updateState();
    _this.idCounter++;
  }

  render () {
    let _this = this;
    return (
      <ul className="todo-list">
        {this.state.tasks.map(function(task, i) {
          return (
            <li className="task-list" key={task.id}>
              <a href="#" className="btn-done" onClick={_this.completeTask.bind(_this, i)}>DONE</a>
              <span className="task-list-title">{task.title}</span>
            </li>);
        })}
      </ul>
    );
  }
}

class TodoForm extends ReactObs {

  updateState () {
    this.setState({
      text: this.state.text
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  inputTask(e) {
    this.state.text = e.target.value;
    this.updateState();
  }

  registTask(e) {
    e.preventDefault();
    if (this.state.text !== "") {
      this.trigger("registTask", this.state.text);
      this.state.text = "";
      this.updateState();
    }
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.registTask.bind(this)}>
        <input type="text" placeholder="TASK TITLE" value={this.state.text} onChange={this.inputTask.bind(this)} />
        <button disabled={this.state.text === ""}>REGIST</button>
      </form>
    );
  }
}

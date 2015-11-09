class TodoNotify extends ReactObs {

  updateState () {
    this.setState({
      message: this.state.message,
      visible: this.state.visible
    });
  }

  constructor (props) {
    super(props);
    this.state = {
      message: "",
      visible: false
    }
    this.on('registTask', this.regist, this);
    this.on('completeTask', this.complete, this);
  }

  regist (_this, title) {
    _this.notify(_this, `registed ${title}!`)
  }

  complete (_this, title) {
    _this.notify(_this, `completed ${title}!`)
  }

  notify (_this, message) {
    _this.state.message = message;
    _this.state.visible = true;
    _this.updateState();
    setTimeout(() => {
      _this.state.visible = false;
      _this.updateState();
    }, 1000);
  }

  render () {
    return (
      <p className={this.state.visible ? "todo-notify show" : "todo-notify hide"}>
        <span>
          {this.state.message}
        </span>
      </p>
    );
  }
}

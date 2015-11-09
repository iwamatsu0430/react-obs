class App extends ReactObs {

  render () {
    return (
      <div>
        <TodoNotify />
        <h1>TODO LIST</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

# react-obs

react-obs is an extension add Observe to React.

You can handle event in multi components very simply.

# Example

This extension can use only ES6

```html:index.html
<html>
<head>
  <title>React-obs Sample</title>
  <script src="react.js"></script>
  <script src="react-dom.js"></script>
  <script src="react-obs.js"></script>
  <script src="example.js"></script>
</head>
<body>
  <div id="app"></div>
  <script>
    ReactDOM.render(
      React.createElement(App, null),
      document.getElementById('app')
    );
  </script>
</body>
</html>
```

```javascript:example.jsx

class App extends ReactObs {

  render () {
    return (
      <div>
        <Foo />
        <Bar />
        <Baz />
      </div>
    );
  }
}

class Foo extends ReactObs {

  constructor (props) {
    super(props)
  }

  onInput (e) {
    this.trigger('inputText', e.target.value);
  }

  render () {
    return (
      <textarea onInput={this.onInput.bind(this)}></textarea>
    );
  }
}

class Bar extends ReactObs {

  constructor (props) {
    super(props)
    this.state = {
      text: ''
    };
    this.on('inputText', this.updateText, this);
  }

  updateText (_this, text) {
    _this.setState({
      text: text
    });
  }

  render () {
    return (
      <p>{this.state.text}</p>
    );
  }
}

class Baz extends ReactObs {

  constructor (props) {
    super(props)
    this.state = {
      text: ''
    };
    this.on('inputText', this.updateText, this);
  }

  updateText (_this, text) {
    _this.setState({
      text: text
    });
  }

  render () {
    return (
      <span>{this.state.text}</span>
    );
  }
}

```

[TODO LIST DEMO](http://iwamatsu0430.github.io/react-obs/sample/)

# Usage

- on(eventName, event, methodParent)
  - regist your method with event name. and please set method parent (If method has no parent, set null or empty)
- off(eventName, event)
  - If you want to stop event call, please use this method.
- trigger(eventName, ...params)
  - call your event and pass params.

called method have to have params "_this". However, you can use params freely.

```
calledMethod (_this, param1, param2, param3) {
  _this.parentMethod();
  alert(`${param1} : ${param2} : ${param3}`);
}
```

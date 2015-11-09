for(var ReactObs____Key in ReactObs){if(ReactObs.hasOwnProperty(ReactObs____Key)){TodoForm[ReactObs____Key]=ReactObs[ReactObs____Key];}}var ____SuperProtoOfReactObs=ReactObs===null?null:ReactObs.prototype;TodoForm.prototype=Object.create(____SuperProtoOfReactObs);TodoForm.prototype.constructor=TodoForm;TodoForm.__superConstructor__=ReactObs;

  Object.defineProperty(TodoForm.prototype,"updateState",{writable:true,configurable:true,value:function( ) {"use strict";
    this.setState({
      text: this.state.text
    });
  }});

  function TodoForm(props) {"use strict";
    ReactObs.call(this,props);
    this.state = {
      text: ""
    };
  }

  Object.defineProperty(TodoForm.prototype,"inputTask",{writable:true,configurable:true,value:function(e) {"use strict";
    this.state.text = e.target.value;
    this.updateState();
  }});

  Object.defineProperty(TodoForm.prototype,"registTask",{writable:true,configurable:true,value:function(e) {"use strict";
    e.preventDefault();
    if (this.state.text !== "") {
      this.trigger("registTask", this.state.text);
      this.state.text = "";
      this.updateState();
    }
  }});

  Object.defineProperty(TodoForm.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement("form", {className: "todo-form", onSubmit: this.registTask.bind(this)}, 
        React.createElement("input", {type: "text", placeholder: "TASK TITLE", value: this.state.text, onChange: this.inputTask.bind(this)}), 
        React.createElement("button", {disabled: this.state.text === ""}, "REGIST")
      )
    );
  }});


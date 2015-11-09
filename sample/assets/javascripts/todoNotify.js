for(var ReactObs____Key in ReactObs){if(ReactObs.hasOwnProperty(ReactObs____Key)){TodoNotify[ReactObs____Key]=ReactObs[ReactObs____Key];}}var ____SuperProtoOfReactObs=ReactObs===null?null:ReactObs.prototype;TodoNotify.prototype=Object.create(____SuperProtoOfReactObs);TodoNotify.prototype.constructor=TodoNotify;TodoNotify.__superConstructor__=ReactObs;

  Object.defineProperty(TodoNotify.prototype,"updateState",{writable:true,configurable:true,value:function( ) {"use strict";
    this.setState({
      message: this.state.message,
      visible: this.state.visible
    });
  }});

  function TodoNotify(props) {"use strict";
    ReactObs.call(this,props);
    this.state = {
      message: "",
      visible: false
    }
    this.on('registTask', this.regist, this);
    this.on('completeTask', this.complete, this);
  }

  Object.defineProperty(TodoNotify.prototype,"regist",{writable:true,configurable:true,value:function($TodoNotify_this, title) {"use strict";
    $TodoNotify_this.notify($TodoNotify_this, ("registed " + title + "!"))
  }});

  Object.defineProperty(TodoNotify.prototype,"complete",{writable:true,configurable:true,value:function($TodoNotify_this, title) {"use strict";
    $TodoNotify_this.notify($TodoNotify_this, ("completed " + title + "!"))
  }});

  Object.defineProperty(TodoNotify.prototype,"notify",{writable:true,configurable:true,value:function($TodoNotify_this, message) {"use strict";
    $TodoNotify_this.state.message = message;
    $TodoNotify_this.state.visible = true;
    $TodoNotify_this.updateState();
    setTimeout(function()  {
      $TodoNotify_this.state.visible = false;
      $TodoNotify_this.updateState();
    }, 1000);
  }});

  Object.defineProperty(TodoNotify.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    return (
      React.createElement("p", {className: this.state.visible ? "todo-notify show" : "todo-notify hide"}, 
        React.createElement("span", null, 
          this.state.message
        )
      )
    );
  }});


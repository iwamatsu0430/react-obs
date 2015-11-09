for(var ReactObs____Key in ReactObs){if(ReactObs.hasOwnProperty(ReactObs____Key)){TodoList[ReactObs____Key]=ReactObs[ReactObs____Key];}}var ____SuperProtoOfReactObs=ReactObs===null?null:ReactObs.prototype;TodoList.prototype=Object.create(____SuperProtoOfReactObs);TodoList.prototype.constructor=TodoList;TodoList.__superConstructor__=ReactObs;

  Object.defineProperty(TodoList.prototype,"updateState",{writable:true,configurable:true,value:function( ) {"use strict";
    this.setState({
      tasks: this.state.tasks
    });
  }});

  function TodoList(props) {"use strict";
    ReactObs.call(this,props);
    this.on("registTask", this.registTask, this);
    this.completeTask.bind(this);
    this.state = {
      tasks: []
    }
    this.idCounter = this.state.tasks.length;
  }

  Object.defineProperty(TodoList.prototype,"completeTask",{writable:true,configurable:true,value:function(i, e) {"use strict";
    e.preventDefault();
    let task = this.state.tasks.splice(i, 1);
    this.trigger("completeTask", task[0].title);
    this.updateState();
  }});

  Object.defineProperty(TodoList.prototype,"registTask",{writable:true,configurable:true,value:function($TodoList_this, text) {"use strict";
    $TodoList_this.state.tasks.push({
      id: $TodoList_this.idCounter, title: text
    });
    $TodoList_this.updateState();
    $TodoList_this.idCounter++;
  }});

  Object.defineProperty(TodoList.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    let _this = this;
    return (
      React.createElement("ul", {className: "todo-list"}, 
        this.state.tasks.map(function(task, i) {
          return (
            React.createElement("li", {className: "task-list", key: task.id}, 
              React.createElement("a", {href: "#", className: "btn-done", onClick: _this.completeTask.bind(_this, i)}, "DONE"), 
              React.createElement("span", {className: "task-list-title"}, task.title)
            ));
        })
      )
    );
  }});


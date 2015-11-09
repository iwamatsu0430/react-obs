for(var ReactObs____Key in ReactObs){if(ReactObs.hasOwnProperty(ReactObs____Key)){App[ReactObs____Key]=ReactObs[ReactObs____Key];}}var ____SuperProtoOfReactObs=ReactObs===null?null:ReactObs.prototype;App.prototype=Object.create(____SuperProtoOfReactObs);App.prototype.constructor=App;App.__superConstructor__=ReactObs;function App(){"use strict";if(ReactObs!==null){ReactObs.apply(this,arguments);}}

  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
    return (
      React.createElement("div", null, 
        React.createElement(TodoNotify, null), 
        React.createElement("h1", null, "TODO LIST"), 
        React.createElement(TodoForm, null), 
        React.createElement(TodoList, null)
      )
    );
  }});


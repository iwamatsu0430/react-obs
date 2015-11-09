React.observe = {};
React.observe.actions = {};
React.observe.bases = {};

class ReactObs extends React.Component {

  constructor (props) {
    super(props)
  }

  on (eventName, action, _this) {
    if (!React.observe.actions[eventName]) {
      React.observe.actions[eventName] = [];
      React.observe.bases[eventName] = [];
    }
    React.observe.actions[eventName].push(action);
    React.observe.bases[eventName].push(_this);
  }

  off (eventName, action) {
    if (React.observe.actions[eventName]) {
      let index = React.observe.actions[eventName].indexOf(action);
      if (index > -1) {
        React.observe.actions[eventName].splice(index, 1);
        React.observe.bases[eventName].splice(index, 1);
      }
    }
  }

  trigger (eventName, ...params) {
    if (React.observe.actions[eventName]) {
      React.observe.actions[eventName].forEach(function(action) {
        let index = React.observe.actions[eventName].indexOf(action);
        let _this = React.observe.bases[eventName][index];
        let copiedParams = params.concat();
        setTimeout(() => {
          copiedParams.unshift(_this);
          action.apply(window, copiedParams);
        }, 0);
      });
    }
  }
}

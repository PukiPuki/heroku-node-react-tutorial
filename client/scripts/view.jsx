var React = require('react');
var request = require('superagent');

var Name = React.createClass({
  getInitialState: function() {
    return {name: 'ooo'};
  },
  componentDidMount: function() {
    var url = "/get_user", 
        that = this;
    request
      .get(url)
      .end(function(err, res){
        if (that.isMounted()) {
          var map = JSON.parse(res.text);
         that.setState({name: map.name});
        }
      });
  },
  render: function() {
    return (
      <span>{this.state.name}</span>
    );
  }
});
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Name />
      </div>
    );
  }
});
module.exports = HelloWorld;

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var PomodoroTimer = React.createClass({
  getInitialState: function() {
    return {
      min: 25,
      sec: 0,
    };
  },

  formatNum: function(num) {
    return num < 10 ? '0' + num : num;
  },

  countdown: function() {
    if (this.state.sec == 0 && this.state.min == 0) {
      clearInterval(this.interval);
      return;
    }

    if (this.state.sec == 0) {
      this.setState({min: this.state.min - 1,
        sec: 59});
    } else {
      this.setState({sec: this.state.sec - 1});
    }
  },

  onButtonPressed: function() {
    this.interval = setInterval(this.countdown, 1000);
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Pomodoro
        </Text>
        <Text style={styles.timer}>
          {this.formatNum(this.state.min)}:{this.formatNum(this.state.sec)}
        </Text>
        <TouchableHighlight underlayColor='#05FFFFFF' onPress={this.onButtonPressed}>
          <Text style={styles.goButton}>
            Go
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#740000',
      padding: 30,
    },
    title: {
      color: 'white',
      fontSize: 65,
      marginBottom: 75,
    },
    timer: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 48,
      marginBottom: 75,
    },
    goButton: {
      color: 'white',
      fontSize: 40,
      marginBottom: 30,
    },
});

module.exports = PomodoroTimer
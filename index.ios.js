/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var PomodoroTimer = require('./PomodoroTimer')
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  View,
} = React;

var Pomodoro = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: PomodoroTimer,
          title: 'Pomodoro',
        }} />
    );
  }
});

var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

AppRegistry.registerComponent('Pomodoro', () => Pomodoro);

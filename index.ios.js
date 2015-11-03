/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Pomodoro = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Pomodoro
        </Text>
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
});

AppRegistry.registerComponent('Pomodoro', () => Pomodoro);

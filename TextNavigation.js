'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var TextNavigation = React.createClass({
    getInitialState: function() {
        return {
            textToDisplay: this.props.text
        };
    },

    render: function() {
        return (
            <View style={styles.container}>
                <Text>{this.state.textToDisplay}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = TextNavigation;
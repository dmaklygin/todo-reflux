"use strict";
var React = require('react');
var _ = require('underscore');

var TodoCounter = React.createClass({
    displayName: 'TodoCounter',
    propTypes: {
        todos: React.PropTypes.array.isRequired           
    },
    render: function () {
        var text;
        var count = _.filter(this.props.todos, function (item) {
            return !item.isChecked;
        }).length;

        if (!count) {
            text = 'You\'ve completed everything today!';
        } else {
            text = '' + count + ' items left';
        }
        
        return (
            <span>{text}</span>
        );
    }
});

module.exports = TodoCounter;

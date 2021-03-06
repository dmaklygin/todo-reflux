'use strict';
var React = require('react');

var TodoActions = require('./todo_actions.js');

/**
 * Form adds Todos via Actions
 *
 * @addTodo TodoActions#addTodo->onAddTodo();
 */
var TodoForm = React.createClass({
    displayName: 'TodoForm',
    getInitialState: function () {
        return {
            showWarning: false
        };
    },
    submitTodo: function (event) {
        event.preventDefault();

        if (this.refs.todo.getDOMNode().value) {
            var todoTitle = this.refs.todo.getDOMNode().value.trim();
            
            TodoActions.addTodo(todoTitle);

            this.refs.todo.getDOMNode().value = '';
            this.setState({
                showWarning: false
            });
        } else {
            this.toggleWarning();
        }
    },
    toggleWarning: function () {
        this.setState({
            showWarning: !this.state.showWarning
        });
    },
    render: function () {
        var cx = React.addons.classSet;
        
        var tooltipClasses = cx({
            tooltip: true,
            show: this.state.showWarning
        });
        
        return (
            <form onSubmit={this.submitTodo}>
                <input className="input pure-u-1 pure-u-sm-2-3 pure-u-lg-2-3" 
                       type="text" placeholder="What needs to be done" ref="todo" />
                <input className="button pure-u-1 pure-u-sm-1-3 pure-u-lg-1-3" type="submit" value="Add Todo" />
                <div className={tooltipClasses}>
                    You need to add a title <span className="close" onClick={this.toggleWarning}>x</span>
                </div>
            </form>
        );        
    }
});

module.exports = TodoForm;

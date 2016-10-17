var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

// TODO: Add React.createClass() style
var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    componentDidUpdate: function (previousProps, prevState) {
        if(this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        console.log("starting timer");
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({timerStatus: 'stopped'});
            }
        }, 1000);
    },
    handleSetTimer: function (seconds) {
        this.setState({
            timerStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({timerStatus: newStatus});
    },
    render: function () {
        var {count, timerStatus} = this.state;
        return (
            <div className="">
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;
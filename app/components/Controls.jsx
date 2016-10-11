var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStaus: React.PropTypes.string.isRequired
    },
    render: function () {
        var {countdownStatus} = this.props;
        var renderStopStartButton = () => {
            if(countdownStatus == 'started') {
                return <button className="button secondary">Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        };

        return (
            <div>
                {renderStopStartButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
});

module.exports = Controls;
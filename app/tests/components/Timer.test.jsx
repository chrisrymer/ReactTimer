var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
   it('should exist', () => {
       expect(Timer).toExist();
   });

    describe('handleStartTimer', () => {
        it('should set state to started and increment', (done) => {
          var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

           expect(timer.state.timerStatus).toBe('started');

           setTimeout(() => {
               expect(timer.state.count).toBe(2);
               done();
           }, 2002);

        });

        it('should pause timer on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('paused');
                expect(timer.state.count).toBe(1);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });

        it('should stop timer and reset to zero', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('stopped');
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
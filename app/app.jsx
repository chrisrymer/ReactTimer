/**
 * Created by crymer on 12/09/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);
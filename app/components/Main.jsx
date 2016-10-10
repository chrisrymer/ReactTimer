var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav />
            Main.jsx
            {props.children}
        </div>
    )
};

module.exports = Main;
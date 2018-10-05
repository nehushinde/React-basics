import React, { Component }from 'react';
// import Radium from 'radium';

import classes from './Person.css';


//statrfull component
class Person extends Component {
    render () {
        return   <div className={classes.Person}>
                     <p onClick={this.props.click}>Person's name is {this.props.name} and age {this.props.age}</p>
                     <input type="text" onChange={this.props.changed} value={this.props.name}></input>
                 </div>
    }
}

export default Person;
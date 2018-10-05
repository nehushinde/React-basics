import React, { Component } from 'react';
// import Radium, { StyleRoot }  from 'radium';
import classes from './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('inside constructor',props);
    this.state = {
      persons : [
        { id: 'hdfh', name: 'xyz', age: '25'},
        { id: 'fgf', name: 'abc', age: '26'}
      ],
      otherState: 'some other val',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('inside component will mount');
  }

  componentDidMount() {
    console.log('inside component did mount');
  }


  // state = {
  //   persons : [
  //     { id: 'hdfh', name: 'xyz', age: '25'},
  //     { id: 'fgf', name: 'abc', age: '26'}
  //   ],
  //   otherState: 'some other val',
  //   showPersons: false
  // }

  switchNameHandler = (newName) => {
    console.log('click');
    this.setState({
      persons : [
        { name: newName, age: '25'},
        { name: 'vbnm', age: '26'}
      ]
    })
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    console.log('nameChangeHandler');
    this.setState({
      persons : persons
    });
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({showPersons: !doseShow});

  }

  deletepersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); OR
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {
    //Inline styles
    // const style = {
    //   backgroundColor: 'white',
    //   font:'inherit',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   padding: '8px',
    //   // ':hover': {
    //   //   backgroundColor: 'yellow',
    //   //   color: 'black'
    //   // }
    // };

    let persons = null;
    let btnClass= '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletepersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              >
            </Person>
          })}
         {/* <Person 
             name={this.state.persons[0].name} and age={this.state.persons[0].age} 
             click={this.switchNameHandler.bind(this,'Max!!!')}
             changed={this.nameChangeHandler}
           ></Person>
           <Person 
             name={this.state.persons[1].name} and age={this.state.persons[1].age} 
           ></Person> */}
        </div>
      );
      btnClass = classes.Red;
    }
    // style[':hover'] =  {
    //   backgroundColor: 'lightblue',
    //   color: 'black'
    // }
    //setting class name dynamically
    const assignClasses = [];
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 0) {
      assignClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <p className={assignClasses.join(' ')}>React App</p>
        {/* <Person></Person> */}
        {/* <Person name='abc' age="20"/> */}
        <button 
          className={btnClass}
          // style={style}
        //   onClick={this.switchNameHandler.bind(this, 'maximelian')}>Click</button>
        // or  <button onClick={ () => this.switchNameHandler('Maximelian!!')}>Click</button>
          onClick={this.togglePersonHandler}>ToggleClick
        </button>
       {/* {  this.state.showPersons === true ? 
         <div>
         <Person 
             name={this.state.persons[0].name} and age={this.state.persons[0].age} 
             click={this.switchNameHandler.bind(this,'Max!!!')}
             changed={this.nameChangeHandler}
           ></Person>
           <Person 
             name={this.state.persons[1].name} and age={this.state.persons[1].age} 
           ></Person>
        </div> 
        : null
       } */}
       {persons}
      </div>
      // </StyleRoot>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1' , null, 'I\'am a React App!'))
  }
}

// export default Radium(App);
export default App;

import React,{Component} from 'react';

export class Car extends Component{
  state={
    color:"red"
  }
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        This is a class car with {this.state.color} color
      </div>
    )
  }
}

export function F_Car(props){
  return(
    <div>
      This is a function car with {props.color}
    </div>
  )
}

export class Customizable_Car extends Component{
  render(){
    return(
      <div>
        This is {this.props.car.company} {this.props.car.name} with {this.props.car.color} color
      </div>
    )
  }
}

export class Person extends Component{
  render(){
    return(
      <div>
        <h3>My name is {this.props.name} and i am {this.props.age}</h3>
        <button onClick={this.props.click}>Delete</button>
      </div>
    )
  }
}

export default class App extends Component{
  state={
    persons:[
      {id:"14",name:"Faizan",age:21},
      {id:"24",name:"Zeeshan",age:22},
      {id:"08",name:"Mubeen",age:25}
    ],
    car1:{
      company:"koenigsegg",
      name:"agera",
      color:"white and black"
    },
    is_red:true
  }
  toggle_class=()=>{ //only use arrow functions
    this.setState(previous_state=>{
      return {is_red:!previous_state.is_red}
    })
  }
  delete_person=index=>{
    let new_person=this.state.persons
    new_person.splice(index,1)
    this.setState({persons:new_person})
  }
  render(){
    let button_=null
    let persons=null
    if(this.state.is_red){
        button_=(
        <button style={styles.red_button} onClick={this.toggle_class}>
          Hide Persons
        </button>
      )
      persons=(
        this.state.persons.map((person,index)=>{
          return (
            <div>
              <Person 
                key={person.id}
                name={person.name}
                age={person.age}
                click={()=>this.delete_person(index)}
              />
              {/* <button key={person.id} onClick={this.delete_person(index)}>Delete</button>
              </Person> */}
            </div>
          )
        })
      )
    }
    else{
      button_=(
        <button style={styles.black_button} onClick={this.toggle_class}>
          Show Persons
        </button>
      )
      persons=(
        <div></div>
      )
    }
    return(
      <div style={styles.hello_world}>
        Hello World
        <Car />
        <F_Car color="black" />
        <Customizable_Car car={this.state.car1}></Customizable_Car>
        {console.log(this.state.is_red)}
        {button_}
        {persons}
      </div>
    )
  }
}

const styles={
  hello_world:{
    fontSize:30
  },
  red_button:{
    background:"red"
  },
  black_button:{
    background:"black",
    color:"white"
  }
}

import React, {Component} from "react";
import PersonsList from "./components/PersonsList";
import NewPerson from "./components/NewPerson";


//styles
import "./App.css"

class App extends Component{
  state = {
    name : "Danilo",
    data : [
      {id:1, name: "Danilo", job: "developer", gender: "male"},
      {id:2, name: "Lav", job: "gamer", gender: "male"},
      {id:3, name: "Sofija", job: "developer", gender: "female"}
    ]
  }

  insertNewPerson = (newPerson) =>{
    newPerson.id = Math.floor(Math.random()*(10000 - 10)+10);
    //let dataCopy = this.state.data.concat(newPerson);
    let dataCopy = [...this.state.data, newPerson];
    //desni deo mozemo da prebacimo dole i da bude manji kod
    this.setState({
      data : dataCopy
    })
  }

  deletePerson = (id) =>{
    let filteredData = this.state.data.filter(el=>{
      return el.id !== id;
    })
    this.setState({
      data : filteredData
    })
  }

  render(){
    return(
      <div>
          <PersonsList deletePerson={this.deletePerson} data={this.state.data}/>
          <NewPerson insertNewPerson={this.insertNewPerson}/>
      </div>
    )
  }
}

export default App;

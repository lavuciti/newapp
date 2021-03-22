import React from "react";
import Person from "./Person"

const PersonsList = ({data, deletePerson})=>{

  const listOfPersons = data.map(person1=>{
    return(
      <Person deletePerson={deletePerson} person2={person1} key={person1.id}/>
    )
  })
  return(
    <div>
      {listOfPersons}
    </div>
  )
}

export default PersonsList;

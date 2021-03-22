import React from "react";

const Person = ({person2, deletePerson}) =>{
  return(
      <div className = "card">
        <h3>{person2.name}</h3>
        <h3>{person2.job}</h3>
        <h3>{person2.gender}</h3>
        <button className="delete-btn" onClick={ ()=>{deletePerson(person2.id)} }>Delete</button>

      </div>
    )
};

export default Person;

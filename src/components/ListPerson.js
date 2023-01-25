import React from 'react'

function ListPerson({person}) {

    function getName(name) {
        console.log(`Selected name ${name}`)
        return name;
    }

  return (
    <h5>I'm {getName(person.name)} from {person.city}.</h5>
    // <h5>I'm {person} .</h5>
  )
}

export default ListPerson

import React from "react";
import ListPerson from "./ListPerson";

function ListRender() {
  //   const names = ["Rajesh", "Ramana", "Satya"];
  //   const nameList = names.map((name) => <ListPerson name1={name}></ListPerson>);
  //   return <div>{nameList}</div>;

//   const names = ["Rajesh", "Ramana", "Satya", "Satya"];
  const persons = [
    {
      id: 1, 
      name: "Martin",
      city: "US",
    },
    {
      id: 2,
      name: "Jason",
      city: "UK",
    },
    {
      id: 3,
      name: "John",
      city: "UAE",
    },
    {
      id: 4,
      name: "Stepan",
      city: "UK",
    },
  ];
  const nameList = persons.map((name, index) => (
    <ListPerson key={index} person={name}></ListPerson> 
  ));
  return <div>{nameList}</div>;
}

export default ListRender;

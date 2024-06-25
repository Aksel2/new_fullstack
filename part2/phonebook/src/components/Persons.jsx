import Person from "./Person";

const isFiltered = (p, filter) => {
  
    return p.name.toLowerCase().includes(filter.toLowerCase())
}

const Persons = ({ persons, filter }) => persons.filter(p => isFiltered(p, filter)).map(person => <Person key={person.name} name={person.name} number={person.number} />)


export default Persons
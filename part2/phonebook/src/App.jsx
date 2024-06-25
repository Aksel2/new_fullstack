import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const Person = ({ name, number }) => <div>{name} {number}</div>

const Header = ({ text }) => <h2>{text}</h2>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const nameExists = () => persons.some(p => p.name === newName)

  const addInfo = (event) => {
    event.preventDefault()
    if (nameExists(newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const personObject = { name: newName, number: newNumber }
    console.log(personObject);
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }


  return (
    <div>
      <Header text="Phonebook" />

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>add a new person </h3>
      <PersonForm addInfo={addInfo} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      
      <Header text="Numbers" />
      
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App
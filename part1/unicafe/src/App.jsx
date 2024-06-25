import { useState } from 'react'


const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClicked }) => <button onClick={onClicked}> {text} </button>

const StatisticLine = ({ text, total }) => {

  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad, positive, average }) => {
  if (good + neutral + bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <StatisticLine text="good" total={good} />
      <StatisticLine text="neutral" total={neutral} />
      <StatisticLine text="bad" total={bad} />
      <StatisticLine text="total" total={good + neutral + bad} />
      <StatisticLine text="average" total={average} />
      <StatisticLine text="positive" total={positive} />
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAverage((updatedGood - bad) / (updatedGood + neutral + bad))
    setPositive((updatedGood) / (updatedGood + neutral + bad) * 100)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAverage((good - bad) / (good + updatedNeutral + bad))
    setPositive((good) / (good + updatedNeutral + bad) * 100)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAverage((good - updatedBad) / (good + neutral + updatedBad))
    setPositive((good) / (good + neutral + updatedBad) * 100)
  }

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClicked={handleGoodClick} />
      <Button text="neutral" onClicked={handleNeutralClick} />
      <Button text="bad" onClicked={handleBadClick} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} positive={positive} average={average} />
    </>
  )
}

export default App
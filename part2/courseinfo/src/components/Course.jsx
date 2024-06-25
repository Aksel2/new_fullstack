const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    const exercisesSum = parts.reduce((acc, cur) => (acc + cur.exercises), 0)
    return (
        <b>Total of {exercisesSum} exercises</b>
    )

}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </>

const Course = ({ course }) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}


export default Course
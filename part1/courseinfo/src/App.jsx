const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p><em>{props.part.name}  </em> is a part of the course and has <em>{props.part.exercises} </em> number of exercises</p>
  )
}
const Content = ({ parts }) => {
  console.log(parts)
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}


    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>the total number of exercise for this couse is: <em> {total} </em>

      </p>
    </>
  )
}
const App = () => {
  const course = 'half stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 70 },
];



export default App;


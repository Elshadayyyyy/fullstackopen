const Header = ({course}) => {
  return (
    <>
      <h1> {course.name} </h1>
    </>
  )
}

const Part = ({part}) => {
  return (
    <p><em>{part.name}  </em> is a part of the course and has <em>{part.exercises} </em> number of exercises</p>
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
  const course = {
    name: 'half stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App;


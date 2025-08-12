const Header = (props) => {
  return (
    <>
      <h1> {props.course} </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p><em>{props.part.name}  </em> is a part of the course and has <em>{props.part.exercises} </em> number of exercises</p>)
}
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>the total number of exercise for this couse is: <em>{props.part1.exercises + props.part2.exercises + props.part3.exercises}</em>

      </p>
    </>
  )
}
const App = () => {
  const course = 'half stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </>
  )
}

export default App;
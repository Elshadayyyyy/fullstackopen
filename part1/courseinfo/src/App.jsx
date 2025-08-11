const Header = (props) =>{
  return (
    <>
    <h1> {props.course} </h1> 
    </>
  )
}

const Content = (props) => {
  return (
    <>
     <h4>content of the course:</h4>
     <p>
      <em>{props.part1} </em>is the first part and has <em>{props.exercises1} </em>numner of exercises
     </p>
      <p>
      <em>{props.part2} </em>is the second part and has <em>{props.exercises2} </em>numner of exercises
     </p>
      <p>
      <em>{props.part3} </em>is the third part and has <em>{props.exercises3} </em>numner of exercises
     </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>the total number of exercise for this couse is: <em>{props.exercises1 + props.exercises2 + props.exercises3}</em>
      
    </p>
    </>
  )
}
const App = () => {
  const course = 'half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
   <>
    <Header course = {course} />
    <Content 
      part1 = {part1}
      exercises1 = {exercises1}
      part2 = {part2}
      exercises2 = {exercises2}
      part3 = {part3}
      exercises3 = {exercises3}
    />
    <Total 
    exercises1 = {exercises1}
    exercises2 = {exercises2}
    exercises3 = {exercises3}
    />
   </>
  )
}

export default App;
const Header = (props) => <h1>{props.course}</h1>
const Content = (props) => {
  return(
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>

  )
}
const Total = (props) => {
  return(
  <p>Number of exercises: {props.parts[0].exercises + 
  props.parts[1].exercises + 
  props.parts[2].exercises}
  </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    { 
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
       name: 'State of a component',
       exercises: 14
     }
]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
console.log()
export default App

// const Hello = ({name,age}) => {
  
//   const bornYear = ()=> new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Patricia'
//   const age = 27

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// console.log()
// export default App

import React from 'react'
// import Restaurant from './components/Basics/Restaurant'
import UseState from './components/Hooks/UseState'

const App = () => {
  return (
    <div className='myclass'>
      {/* <h1>Welcome</h1> */}
      {/* nested component */}
      {/* <MyName/> */}
      {/* <Restaurant/> */}
      <UseState/>
    </div>
  
  )
}


// how actually react works 
// const App = () => {
//   return React.createElement("div",{},React.createElement("h1",{},"Welcome"));
// }


// another component
// const MyName = () => {
//   return (
//     <div>
//       <h1>Vishakha {2+2}</h1> 
//     </div>
//   )
// }

export default App

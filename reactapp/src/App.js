import React from 'react'

const App = () => {
  return (
    <div className='myclass'>
      <h1>Welcome{1+1}</h1>
    </div>
  
  )
}
// how actually react works 

// const App = () => {
//   return React.createElement("div",{},React.createElement("h1",{},"Welcome"));
// }

export default App

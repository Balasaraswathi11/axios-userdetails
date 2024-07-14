import React from 'react'
import Update from './Components/Update'
import Read from './Components/Read'
import Create  from './Components/Create'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './Components/Header'

const App = () => {
  return (<>
   
     <div className='container  '>
      <BrowserRouter>
      <h1 className='text-center mt-4'>User Details</h1>
      <Header />
      <Routes>
        <Route path="/" element={   <Create />} className="border border-black"/>
        <Route path="/update" element={    <Update />}/>
        <Route path="/read" element={   <Read  />}/>
        <Route path="*" element={<h1>Page not found</h1>} />
        </Routes></BrowserRouter>

        </div>
      
   
 </> )
}

export default App
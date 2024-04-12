import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]= useState('olive');
  const changeColor=(colorval)=>{
    console.log(colorval);
    setColor(colorval)
  }
 

  return (
    <>
    <div className="flex justify-center w-full" style={{ backgroundColor:color , minHeight: '100vh', transition: 'background-color 0.5s', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>changeColor('red')}>Red</button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>changeColor('green')}>Green</button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>changeColor('blue')}>Blue</button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>changeColor('yellow')}>Yellow</button>
    </div>
    </>
  )
}

export default App

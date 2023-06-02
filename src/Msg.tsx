import './msg.css'
import Bubble from "./components/icons/Bubble.js"

function Msg() {

  return (
    <div className='w-80 h-14 flex column justify-center align-middle rounded-full bg-cyan-500 shadow-xl shadow-gray-400'>
      <div className='flex ml-6 h-full justify-between'>
        <Bubble/>
          <div className='m-1 text-center'>
          <h1><b>NewMsg</b></h1>
          <p className=''>hola, soy un texto de prueba</p>
          </div>
        <button className=" w-9 bg-red-500 rounded-r-full box-content">x</button>
      </div>
    </div>
  )
}

export default Msg
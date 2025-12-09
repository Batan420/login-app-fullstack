import { useState } from "react"
import assests from './assets/background-netfilx.jpg'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function App() {
  const Navigate= useNavigate()
  const[user,setuser] =useState()
  const[pass,setpass]=useState()
  function handleuser(evt){
    setuser(evt.target.value)
  }
  function handlepass(evt){
    setpass(evt.target.value)
  }
  function check(){
    var logindetails= axios.post(`http://localhost:3000/login`,{"username":user,"password":pass})
    logindetails.then(function(data){
      if(data.data ==true)
      {
        Navigate('/sucess')
      }
      else
      {
        Navigate('/fail')
      }
    })

  }
  return (
    <div className='h-screen w-screen bg-cover bg-center' style={{backgroundImage: `url(${assests})`}}>
      <h1 className="text-red-500 text-5xl font-bold p-32 ">Netflix
      </h1>
      <div className='flex justify-center items-center'>
        <div className='bg-gray-900 bg-opacity-75 backdrop-blur-sm p-8 rounded-lg w-96'>
          <h2 className='text-white text-2xl font-bold mb-4'>Sign In</h2>
          <div className='flex flex-col gap-4'>
            <input type='text' onChange={handleuser} name='username' placeholder='username' className='p-2 bg-gray-700 text-white rounded' required></input>
            <input type='password' onChange={handlepass} name='password' placeholder='password' className='p-2 bg-gray-700 text-white rounded' required></input>
            <button type='submit' onClick={check} className='p-2 bg-red-500 text-white rounded font-bold'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

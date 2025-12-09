import { useNavigate } from 'react-router-dom'

const Fail = () => {
    const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center'>
        <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-2xl max-w-md w-full'>
            <h1 className='text-3xl font-bold text-red-500 mb-4'>Login Failed</h1>
            <p className='text-gray-300 text-lg mb-6'>Please give the correct details</p>
            <button onClick={() => navigate('/')} className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'> 
                Back to Login
            </button>
        </div>
    </div>
  )
}

export default Fail
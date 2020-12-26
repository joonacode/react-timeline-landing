import { Hero, Navbar } from './components'

function App() {
  return (
    <div className='bg-main min-h-screen'>
      <div className='relative'>
        <div className='bg-back'></div>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App

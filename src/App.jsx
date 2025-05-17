import { useState, useEffect } from 'react'
import './App.css'
import Cards from './componenets/cards.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import image from './assets/image.png'

function App() {
  const [fromAmount, setFromAmount] = useState(0)       
  let [toAmount, setToAmount] = useState(0)       

  let [from, setFrom] = useState("INR")
  let [to, setTo] = useState("INR")

  let conversion = useCurrencyInfo(from)
  let object = Object.keys(conversion)

  useEffect(() => {
    toAmount = fromAmount * conversion[to]
    console.log(toAmount)
    setToAmount(toAmount)
  }, [fromAmount, to, conversion])

  const clear = () => {
    setFromAmount(0)
    setToAmount(0)
  }

  return (
    <>
      <link href="/src/styles.css" rel="stylesheet"></link>
      <div className='h-screen w-screen bg-linear-to-r from-[#111525] to-[#161A30] flex flex-col justify-center items-center gap-5'
      style={{backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}>
        <div className='rounded-lg shadow-xl/40 p-10 bg-[rgba(17, 21, 37, 1)]'>
          <p className='text-3xl text-white text-bold text-center my-8'>Currency Convertor</p>
          <div className='flex justify-center items-center gap-5'>
            <Cards
              loc='From'
              currency={from}
              setCurrency={setFrom}
              amount={fromAmount}
              setAmount={setFromAmount}
              object={object}
              isReadOnly={false}
            ></Cards>
            <Cards
              loc='To'
              currency={to}
              setCurrency={setTo}
              amount={toAmount}
              setAmount={setToAmount}
              object={object}
              isReadOnly={true}></Cards>
          </div>
          <button
            className='rounded-md text-black bg-gray-200 hover:bg-gray-300 hover:scale-120 duration-170 px-3 my-3'
            onClick={clear}>Clear</button>
        </div>
      </div>
    </>
  )
}

export default App

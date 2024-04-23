import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTable from './components/ProductTable'

function App() {
  // const [count, setCount] = useState(0)
  const products = [
    {id: 1, name: "Produto A", price: "R$ 224,00", stock: 20 },
    {id: 2, name: "Produto B", price: "R$ 35,00", stock: 20 },
    {id: 3, name: "Produto C", price: "R$ 20,00", stock: 20 },
    {id: 4, name: "Produto D", price: "R$ 16,00", stock: 20 },
    {id: 5, name: "Produto E", price: "R$ 94,00", stock: 20 },
  ]
  
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <ProductTable products={products}></ProductTable>
      </div>
    </>
  )
}

export default App

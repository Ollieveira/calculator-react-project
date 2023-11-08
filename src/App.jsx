import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react'

import Header from './Components/Header'
import Input from './Components/Input'

import './index.css'

const Resultado = styled.p`
  width: 92%;
  padding: 0 20px;
  color: #eee;
  font-family: DsDigital;
  font-size: 50px;
  border-radius: 8px;
  background-color: #555;
`

const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 8px;
  border: none;
  background-color: #555;
  color: #eee;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    border: solid 2px #ff9f0a;
    background-color: #ff9f0a;
  }
`

const App = () => {
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [calc, setCalc] = useState(0)

  const handleInputChangeNumber1 = e => {
    setNumber1(Number(e.target.value))
  }

  const handleInputChangeNumber2 = e => {
    setNumber2(Number(e.target.value))
  }

  const handleButtonClickCalc = e => {
    const buttonValue = e.target.textContent

    if (buttonValue === '+' && number1 && number2) {
      setCalc(number1 + number2)
    } else if (buttonValue === '-' && number1 && number2) {
      setCalc(number1 - number2)
    } else if (buttonValue === '÷' && number1 && number2) {
      setCalc(number1 / number2)
    } else if (buttonValue === 'x' && number1 && number2) {
      setCalc(number1 * number2)
    } else {
      alert('É necessário números para realizar uma operação!')
    }
    setTimeout(() => {
      setNumber1('')
      setNumber2('')
    }, 3000)

    console.log(calc)
  }

  const clearResult = () => {
    setCalc(0)
  }

  return (
    <>
      <Header />
      <div className="container">
        <Resultado>{calc}</Resultado>
        <div className="container-inputs">
          <Input
            value={number1}
            onChange={handleInputChangeNumber1}
            placeholder="Digite um número"
            type="number"
          ></Input>
          <Input
            value={number2}
            onChange={handleInputChangeNumber2}
            placeholder="Digite outro número"
            type="number"
          ></Input>
        </div>
        <div className="container-button">
          <Button onClick={handleButtonClickCalc}>+</Button>
          <Button onClick={handleButtonClickCalc}>-</Button>
          <Button onClick={handleButtonClickCalc}>÷</Button>
          <Button onClick={handleButtonClickCalc}>x</Button>
          <Button onClick={clearResult}>LIMPAR</Button>
        </div>
      </div>
    </>
  )
}

export default App

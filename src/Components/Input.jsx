import { styled } from 'styled-components'

const InputStyle = styled.input`
  height: 30px;
  padding: 0 5px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: #555;
  color: #eee;
  font-size: 16px;
  font-weight: bold;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &::placeholder {
    color: #eee;
    font-style: italic;
    opacity: 40%;
    font-weight: 400;
  }

  &:focus {
    border-color: #ff9f0a;
    outline: none;
  }
`

const Input = ({ value, onChange, placeholder }) => {
  return (
    <InputStyle
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></InputStyle>
  )
}

export default Input

import styled from 'styled-components'

const ButtonStyle = styled.button`
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

const Button = ({ children, onClick }) => {
  return <ButtonStyle onClick={onClick}>
      {children}
    </ButtonStyle>
}

export default Button

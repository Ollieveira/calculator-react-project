import styled from "styled-components";

const Resultado = styled.p`
  width: 92%;
  padding: 0 20px;
  color: #eee;
  font-family: DsDigital;
  font-size: 50px;
  border-radius: 8px;
  background-color: #555;
`

const Result = ({children}) => {
  return (
    <Resultado>
      {children}
    </Resultado>

  )
}

export default Result

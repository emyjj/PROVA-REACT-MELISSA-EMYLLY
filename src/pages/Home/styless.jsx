import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #b0b0b0, #444242);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Title = styled.h1`
  margin:0px;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  font-family: Arial, sans-serif;
  
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-bottom: 0px;
  width: 400px;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #a6a6a6;
  color: #535353;
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  border: none;
  border: 2px solid #949292;
  border-radius: 10px;
  cursor: pointer;
  width: 400px;
  &:hover {
    background-color: #9a9a9a;
  }
`
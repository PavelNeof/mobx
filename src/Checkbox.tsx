import React from 'react';
import styled from "styled-components";


type CheckboxType = {
    labelTxt: string
    id:string
}

const CheckboxContainer = styled.div`
  margin-left: 100px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  
  label {
    font-size: 2.2em;
    cursor: pointer;
    display: flex;
    &:hover{
      &:before{
        background-color: #3b82f6;
      }
    }
  }
  
  input{
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  input:checked{
    &+label::before {
      content: "\\002714";
      background-color: #1d4ed8;
      display: flex;
      justify-content: center;
      align-items: center;
      color:white;
    }
  }
  
  
  input:focus{
    &+label::before{
      box-shadow: 0 0 20px black;
    }
  }
  

  label::before {
    margin-top:0.3em;
    margin-right: 0.5em;
    content: "";
    border: 0.05em solid black;
    height: 1em;
    width: 1em;
    border-radius: 0.015em;

  }
`


const Checkbox = (props: CheckboxType) => {

    return (
        <CheckboxContainer>
            <input type={'checkbox'} id={props.id} />
            <label htmlFor={props.id}> {props.labelTxt} </label>
        </CheckboxContainer>
    );
};

export default Checkbox;
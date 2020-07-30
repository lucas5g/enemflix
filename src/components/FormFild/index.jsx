import React from 'react';
import styled, { css } from 'styled-components';


const FormFieldWrapper = styled.div`
  position: relative;
  textarea{
    min-height: 150px;
  
  }
  input[type="color"]{
    padding-left: 56px;
  }

`
const Label = styled.label`

`
Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
   position: absolute;
  
  top: 0;
  
  left: 16px; 

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;



`

const Input = styled.input`
  background: #53585D;
  color: #f5f5f5;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: none;
  border: 0;

  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus{
    border-bottom-color: var(--primary);

  }

  &:focus:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);
    }

  ${({hasValue}) => hasValue &&  css`
    &:not([type="color"]) + span {
      transform: scale(.6) translateY(-10px);

    }
  `
  }
`

function FormFild({
  label, type, name, value, onChange,
}) {
  const isTextArea = type === 'textarea'
  const tag = isTextArea ? 'textarea' : 'input'
  const hasValue = Boolean(value.length)
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={name}
      >

        <Input
          as={tag}
          type={type}
          name={name}
          id={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

export default FormFild;

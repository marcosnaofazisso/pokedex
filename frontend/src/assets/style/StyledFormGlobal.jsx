import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 21rem;
  margin-top: 12px;
  label {
    color: #070707;
    font-size: 1rem;
    font-weight: bold;
  }
  input[type="radio"]{
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 5px solid;
    margin-left: 12px;
    position: relative;
    top: -2px;
    border-radius: 50%;
    border-color: #070707;
    background-color: #fff;
    &:checked{
      background-color: #070707;
      border-color: #070707;
    }
  }
`;

export const FormWrapper = styled.div`
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  padding: 0px 0 30px;
  margin: 0 50px;
  width: 500px;
  height: 700px;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 5px;
  @media (max-width: 783px) {
    margin: 3rem 3% auto;
    padding: 5px;
    height: 42rem;
    width: 92%;
  }
`;
export const FormHeader = styled.header`
  margin: 5px 0 10px;
  padding-top: 24px;
  padding-bottom: 19px;
  h2 {
    color: #f00909;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;
export const FormBody = styled.div`
border-radius: 20px;
  padding-right: 32px;
  padding-left: 32px;
`;
export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  & + & {
    margin-top: 35px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
export const FormInput = styled.input`
  padding: 20px 0;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  margin-top: 5px;
  &:focus {
    border-bottom-color: rgb(241, 99, 4);
    outline: 0;
  }
  &:focus {
    &::-webkit-input-placeholder {
      color: rgb(15, 14, 1);
      top: -10px;
      font-size: 14px;
      left: 4px;
    }
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: #ee3131;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    background-image: linear-gradient(to right, #f8a686 0%, #fc1010 100%);
    box-shadow: 0 10px 10px #f88e8e;
    transform: translate(0, -5px);
  }

`;

export const FormLink = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  color: rgb(233, 116, 116);
  cursor: pointer;
  transition: color 0.25s ease-in;
  &:hover {
    color: rgb(247, 10, 10);
  }
  @media (max-width: 783px) {
    font-size: 13px;
    text-align: center;
  }
`;
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./logo.svg");
  background-repeat: no-repeat;
  background-position: center top 48px;

  @media (min-width: 768px) {
    background-position: center top 80px;
  }

  .success-message{
    background-color: green;
    color: white;
    position: absolute;
    bottom: 40px;
    right: 40px;
    padding: 15px;
  }
  
  .error-message{
    background-color: red;
    color: white;
    position: absolute;
    bottom: 40px;
    right: 40px;
    padding: 15px;
  }

`;

export default FormWrapper;

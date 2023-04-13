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

  .message {
    color: white;
    position: absolute;
    bottom: 5%;
    right: 2%;
    padding: 15px;
  }

  .success-message {
    background-color: green;
  }

  .error-message {
    background-color: red;
  }
`;

export default FormWrapper;

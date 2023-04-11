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

  
`;

export default FormWrapper;

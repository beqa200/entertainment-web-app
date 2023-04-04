import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #161d2f;
  padding: 24px;
  border-radius: 10px;
  width: 327px;
  h1 {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  input {
    width: 90%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #5a698f;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    padding: 18px 16px;
    opacity: 0.5;
    margin-top: 8px;
    &:focus {
      outline: none;
    }
  }

  .error {
    color: red;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    opacity: 0.9;
    margin: 5px 0px 0px 10px
  }

  button {
    display: block;
    width: 90%;
    height: 48px;
    background: #fc4747;
    border-radius: 6px;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    border: none;
    margin: 40px auto 0;
  }

  .text {
    font-style: normal;
    font-weight: 100;
    font-size: 15px;
    line-height: 19px;
    color: #ffffff;
    margin-top: 24px;
    text-align: center;
    
    a {
        color: #FC4747;
    }
  }
`;

export default StyledForm;

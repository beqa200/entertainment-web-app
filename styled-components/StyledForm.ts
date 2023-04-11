import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #161d2f;
  padding: 24px;
  border-radius: 10px;
  width: 327px;

  @media (min-width: 768px) {
    min-width: 400px;
    margin-top: -200px;
    border-radius: 20px;
    padding: 32px;
  }

  @media (min-width: 1440px) {
    margin-top: 0px;
  }

  h1 {
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
    input {
      width: 100%;
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
      caret-color: #fc4747;
      &:focus {
        outline: none;
      }
    }

    .error {
      color: #fc4747;
      font-weight: 300;
      font-size: 13px;
      opacity: 0.9;
      position: absolute;
      top: 50%;
      right: 10px;
    }
  }

  button {
    display: block;
    width: 100%;
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

    &:hover {
      background: #ffffff;
      color: #161d2f;
    }
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
      color: #fc4747;
    }
  }
`;

export default StyledForm;

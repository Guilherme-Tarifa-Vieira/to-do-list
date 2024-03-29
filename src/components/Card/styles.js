import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 15px;
  height: 222px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  .input-edit {
    border: none;
    outline: none;
  }

  header {
    position: absolute;
    top: -22px;
    left: 15px;
    .button-edit {
      background-color: transparent;
      color: #b3b3b3;
      display: inline-block;
      position: absolute;
      left: 252px;
      top: 148px;
    }
  }

  input {
    border: none;
    outline: none;
  }
  div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .footer {
    border-top: 1px solid #e5e5e5;
    width: 90%;
    position: absolute;
    top: 158px;
    left: 15px;
  }
  .add-task-button {
    display: flex;
    align-items: center;
    background-color: transparent;
    position: absolute;
    top: 52px;
    left: 15px;
    color: #b3b3b3;
  }

  .task-item {
    position: absolute;
    top: 88px;
    left: 15px;
    overflow-y: scroll;
  }

  button {
    position: absolute;
    height: 24px;
    padding: 2px;
    font-size: 0.9rem;
    background: #20ac51;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    float: right;
    cursor: pointer;

    position: absolute;
    top: 123px;
    left: 258px;
  }
  .txt-edit {
    width: 100%;
    border: none;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }
  .p-content {
    margin-top: 10px;
    width: 200px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50px;
    margin-top: 5px;
    float: right;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background-color: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header,
      input,
      button,
      textarea,
      footer {
        opacity: 0;
      }
    `}
`
export const Label = styled.span`
  width: 98px;
  height: 24px;
  border-radius: 8px;
  display: inline-block;
  background: ${(props) => props.color};
  text-align: center;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

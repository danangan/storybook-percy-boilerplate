import * as React from "react";
import styled, { css } from "styled-components";
type Props = {
  theme: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${({ theme }) => {
    switch (theme) {
      case "default":
        return css`
          background: blue;
        `;
      case "warning":
        return css`
          background: yellow;
        `;
      case "danger":
        return css`
          background: red;
        `;
      case "success":
        return css`
          background: green;
        `;
      default:
        break;
    }
  }}
`;

const ExportedButton: React.FunctionComponent<Props> = (props) => {
  return <Button {...props}></Button>;
};

export default ExportedButton;

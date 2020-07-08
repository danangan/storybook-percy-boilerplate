import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
};

export const ButtonWithText = () => (
  <>
    <Button onClick={action("clicked")}>Hello Button component</Button>
  </>
);

export const ButtonWithEmoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const ThemedButton = () => (
  <>
    <h2>Button with theme</h2>
    <h3>Default theme</h3>
    <Button theme="default">Button with default theme</Button>
    <h3>Warning theme</h3>
    <Button theme="warning">Button with warning theme</Button>
    <h3>Danger theme</h3>
    <Button theme="danger">Button with danger theme</Button>
    <h3>Success theme</h3>
    <Button theme="success">Button with danger theme</Button>
  </>
);

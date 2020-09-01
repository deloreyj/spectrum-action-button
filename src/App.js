import React from "react";
import { ActionButton, Provider, defaultTheme } from "@adobe/react-spectrum";
import ColumnSettings from "@spectrum-icons/workflow/ColumnSettings";

import "./styles.css";

export default function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ActionButton aria-label="Column visibility popover" justifySelf="end">
          <ColumnSettings />
        </ActionButton>
      </div>
    </Provider>
  );
}

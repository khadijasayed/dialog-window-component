import React, { useState } from "react";
import Button from "./components/button/button";
import EditModal from "./components/edit-modal/edit-modal";
import WarningModal from "./components/warning-modal/warning-modal";
import "./App.css";

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialog, setDialog] = useState(0);
  const onClick = (isDialogOpen) => setDialogOpen(isDialogOpen);

  return (
    <div className="app">
      <Button
        label={"Open Dialog 1"}
        onClick={() => {
          setDialog(1);
          setDialogOpen(true);
        }}
      />
      <Button
        label={"Open Dialog 2"}
        onClick={() => {
          setDialog(2);
          setDialogOpen(true);
        }}
        style={{ marginLeft: "10px" }}
      />
      {dialog === 1 && (
        <EditModal isOpen={isDialogOpen} setDialogStatus={onClick} />
      )}
      {dialog === 2 && (
        <WarningModal isOpen={isDialogOpen} setDialogStatus={onClick} />
      )}
    </div>
  );
};

export default App;

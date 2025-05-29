import React from "react";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Content from "../content/content";
import Button from "../button/button";
import ButtonGroup from "../button-group/button-group";
import Footer from "../footer/footer";

const WarningModal = ({ isOpen, setDialogStatus }) => {
  if (!isOpen) return null;

  return (
    <Dialog isOpen={isOpen}>
      <Header icon={"⚠️"} title={"Warning"} />
      <Content>
        <p>Are you sure you want to delete this item?</p>
      </Content>
      <Footer>
        <ButtonGroup>
          <Button label={"No"} onClick={() => setDialogStatus(false)}></Button>
          <Button
            label={"Yes"}
            onClick={() => {
              setDialogStatus(false);
              alert("Deleted!");
            }}
          ></Button>
        </ButtonGroup>
      </Footer>
    </Dialog>
  );
};
export default WarningModal;

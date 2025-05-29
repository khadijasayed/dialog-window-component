import React from "react";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Content from "../content/content";
import Button from "../button/button";
import ButtonGroup from "../button-group/button-group";
import Footer from "../footer/footer";

const EditModal = ({ isOpen, setDialogStatus }) => {
  if (!isOpen) return null;

  return (
    <Dialog isOpen={isOpen}>
      <Header icon={"📝"} title={"Edit Note"}>
        <ButtonGroup>
          <Button label={"Help"} onClick={() => alert("Help clicked")}></Button>
        </ButtonGroup>
      </Header>
      <Content>
        <p>This is a dialog with a header Button and footer Buttons.</p>
      </Content>
      <Footer info={"All changes are saved automatically."}>
        <ButtonGroup>
          <Button
            label={"Cancel"}
            onClick={() => setDialogStatus(false)}
          ></Button>
          <Button
            label={"Save"}
            onClick={() => {
              setDialogStatus(false);
              alert("Saved!");
            }}
          ></Button>
        </ButtonGroup>
      </Footer>
    </Dialog>
  );
};
export default EditModal;

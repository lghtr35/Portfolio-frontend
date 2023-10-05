import { Carousel } from "../carousel/Carousel";
import { Modal } from "../../static.components";
import { colors } from "../../../helpers/conf";
import { Button } from "@mui/material";

export const ProjectModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div
        style={{
          alignContent: "center",
          flexDirection: "column",
          width: "54vw",
          height: "68vh",
          padding: "3vw",
          display: "flex",
          backgroundColor: colors.secondary,
          color: colors.textDark,
          borderRadius: "4%",
          boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
        }}
      >
        <h2 variant="h3">{props.projectTitle}</h2>
        <div style={{ overflow: "scroll" }}>
          <h3 variant="h5">{props.projectDescription}</h3>
        </div>

        <Carousel
          imageStyle={{
            width: "100%",
            aspectRatio: 1,
            height: undefined,
          }}
          style={{
            width: "100%",
            height: "70%",
          }}
          images={props.images}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            padding: "2vh",
          }}
        >
          <Button variant="contained" size="large" href={props.link}>
            Go to repo
          </Button>
        </div>
      </div>
    </Modal>
  );
};
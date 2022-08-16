import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import StairsIcon from "@mui/icons-material/Stairs";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { LocationOn } from "@mui/icons-material";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import { Avatar, List, ListItem, Paper, Stack } from "@mui/material";

const ImageModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "600px",
  width: "670px",
};

const ImageModal = {
  "@media(max-Width:600px)": {
    display: "none",
  },
};

const AgentModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #600DFF",
  borderRadius: "8px",
  boxShadow: 54,
  p: 4,
};

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "background.paper",

  border: "3px solid #600DFF",
  borderRadius: "8px",
  boxShadow: 54,
  p: 4,
};

const NewCard = ({
  // propName,
  // address,
  // price,
  // description,
  // noOfBeds,
  // area,
  // floor,
  // noOfBathrooms,
  // agentName,
  // age,
  // expirence,
  // agentEmail,
  // agentImage,
  // SlideImages,
  Property_Name,
  Web_Remarks,
  Price,
  Property_Title,
  Bedrooms,
  No_of_Bathroom,
  Unit_Builtup_Area,
  Listing_Agent,
  Listing_Agent_Phone,
  Listing_Agent_Photo,
  Listing_Agent_Email,

  Images,
}) => {
  const [openImageModal, setopenImageModal] = React.useState(false);
  const handleImageModalOpen = () => setopenImageModal(true);
  const handleImageModalClose = () => setopenImageModal(false);

  const [agentModalOpen, setagentModalOpen] = React.useState(false);
  const handleAgentModalOpen = () => setagentModalOpen(true);
  const handleAgentModalClose = () => setagentModalOpen(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="wrapper">
      {/* <h1>{Property_name}</h1> */}
      <Modal
        sx={ImageModal}
        open={openImageModal}
        onClose={handleImageModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={ImageModalStyle}>
          <Carousel onClick={handleImageModalOpen}>
            {Images.image.map((image, index) => (
              <Carousel.Item key={index}>
                <CardMedia height="600" width="700" onClick={handleImageModalOpen} component="img" image={image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Paper>
      </Modal>

      <Modal
        open={agentModalOpen}
        onClose={handleAgentModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={AgentModalStyle}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 110, height: 110 }} alt="Remy Sharp" src={Listing_Agent_Photo} />
            <Typography id="modal-modal-title" variant="h4" ml={4}>
              {Listing_Agent}
            </Typography>
          </div>

          <List sx={{ fontSize: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ListItem>Age : {35} </ListItem>
              <Button variant="light" style={{ backgroundColor: "#25d366" }}>
                <IconButton sx={{ fontSize: "15px", color: "black", "&:hover": { background: "none" } }}>
                  <WhatsAppIcon />
                  Whastapp
                </IconButton>
              </Button>
            </div>

            <ListItem>Phone : {Listing_Agent_Phone}</ListItem>
            <ListItem>Email: {Listing_Agent_Email}</ListItem>
          </List>
        </Box>
      </Modal>

      <Modal
        className="modal-for-decline"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please select a Reason for decline
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label" style={{ marginTop: "10px" }}>
              Choose
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={select}
              // onChange={handleChangefordel}
              autoWidth
              label="Age"
            >
              <MenuItem value={10}>Deal done within Aaronz</MenuItem>
              <MenuItem value={21}>No one has responded</MenuItem>
              <MenuItem value={22}>Deal done outside Aaronz</MenuItem>
              <MenuItem value={24}>Property not with me anymore</MenuItem>
              <MenuItem value={26}>Others</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={handleClose} variant="primary" style={{ marginTop: "10px" }}>
            Done
          </Button>
        </Box>
      </Modal>

      <Card
        sx={{
          width: 320,
          height: "420px",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          borderRadius: "10px",
          borderColor: "#f80066",
          borderStyle: "solid",
        }}
        elevation={10}
      >
        <CardHeader
          sx={{ marginTop: "-20px" }}
          title={Property_Name}
          //   subheader={
          //     <IconButton
          //       aria-label="location"
          //       sx={{
          //         fontSize: "10px",
          //         marginLeft: "-20px",
          //         marginBottom: "-10px",
          //         marginTop: "-15px",
          //       }}
          //     >
          //       <LocationOn sx={{ color: "#F80066" }} />
          //       {}
          //     </IconButton>
          //   }
        />
        <Carousel style={{ marginTop: "-17px" }} interval={3000}>
          {Images.image.map((image, index) => (
            <Carousel.Item key={index}>
              <CardMedia onClick={handleImageModalOpen} component="img" height="200" image={image} />
            </Carousel.Item>
          ))}
        </Carousel>

        <CardContent>
          <div style={{ display: "flex", marginBottom: "5px", marginTop: "-11px" }}>
            <Typography variant="h8">AED</Typography>
            <Typography variant="h5" ml={1}>
              {" "}
              {Price}
            </Typography>
            <Typography variant="h8" ml={1}>
              onwards
            </Typography>
          </div>

          <Typography
            mt={-1}
            mb={-1}
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "13px",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {Property_Title}
          </Typography>
          <Stack direction="row" style={{ display: "flex" }}>
            <IconButton
              aria-label="Beds"
              sx={{
                fontSize: "15px",
                color: "black",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <AirlineSeatIndividualSuiteIcon sx={{ marginRight: "4px", marginLeft: "-7px" }} />
              {Bedrooms}
            </IconButton>
            <IconButton
              aria-label="Beds"
              sx={{
                fontSize: "15px",
                color: "black",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <AspectRatioIcon sx={{ marginRight: "4px" }} />
              {Unit_Builtup_Area} SqFt
            </IconButton>
            <IconButton
              aria-label="Beds"
              sx={{
                fontSize: "15px",
                color: "black",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <StairsIcon sx={{ marginRight: "4px" }} />
              {5}
            </IconButton>
            <IconButton
              aria-label="Beds"
              sx={{
                fontSize: "15px",
                color: "black",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <BathtubIcon sx={{ marginRight: "4px" }} />
              {No_of_Bathroom}
            </IconButton>
          </Stack>
        </CardContent>
        <CardActions sx={{ marginTop: "-20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: "#F80066" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ color: "#1c6dd0" }} />
          </IconButton>
          <div style={{ display: "flex", marginLeft: "6px", height: "40px" }}>
            <Button sx={{}} onClick={handleAgentModalOpen}>
              Agent
            </Button>
            <Button variant="outline-danger" onClick={handleOpen} style={{ marginLeft: "10px" }}>
              Decline
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default NewCard;

// <ExpandMore
//    expand={expanded}
//    onClick={handleExpandClick}
//    aria-expanded={expanded}
//    aria-label="show more"
// >
//    <ExpandMoreIcon />
// </ExpandMore>;

// <CardMedia
//    component="img"
//    height="220"
//    image="https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA="
//    alt="Paella dish"
// />;

// <Collapse in={expanded} timeout="auto" unmountOnExit>
// <CardContent>
//    <Typography paragraph>Method:</Typography>
//    <Typography paragraph>
//       Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
//       for 10 minutes.
//    </Typography>
//    <Typography paragraph>
//       Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//       medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//       occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large
//       plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay
//       leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
//       until thickened and fragrant, about 10 minutes. Add saffron broth and remaining
//       4 1/2 cups chicken broth; bring to a boil.
//    </Typography>
//    <Typography paragraph>
//       Add rice and stir very gently to distribute. Top with artichokes and peppers,
//       and cook without stirring, until most of the liquid is absorbed, 15 to 18
//       minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking
//       them down into the rice, and cook again without stirring, until mussels have
//       opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
//       don’t open.)
//    </Typography>
//    <Typography>
//       Set aside off of the heat to let rest for 10 minutes, and then serve.
//    </Typography>
// </CardContent>
// </Collapse>

// <Carousel.Item>
// <CardMedia
//    onClick={handleImageModalOpen}
//    component="img"
//    height="240"
//    image="https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA="
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    onClick={handleImageModalOpen}
//    component="img"
//    height="240"
//    image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    onClick={handleImageModalOpen}
//    component="img"
//    height="240"
//    image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    onClick={handleImageModalOpen}
//    component="img"
//    height="240"
//    image="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>

// <Carousel.Item>
// <CardMedia
//    sx={{ height: "500", width: "1000" }}
//    component="img"
//    height="600"
//    width="700"
//    image="https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA="
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    sx={{ height: "500", width: "1000" }}
//    component="img"
//    height="600"
//    width="700"
//    image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    component="img"
//    sx={{ height: "500", width: "1000" }}
//    height="600"
//    width="700"
//    image="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>
// <Carousel.Item>
// <CardMedia
//    component="img"
//    sx={{ height: "500", width: "1000" }}
//    height="600"
//    width="700"
//    image="https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//    alt="Paella dish"
// />
// </Carousel.Item>

import { Button, FormControl, Grid, IconButton, OutlinedInput, TextField, Typography, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewCard from "../newCard/newCard";
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from "axios";
import { SearchOutlined, SearchRounded } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

const datas = [
  {
    propName: "Burj khalifa",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1470043201067-764120126eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523735039455-db70a4480860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://media.istockphoto.com/photos/resort-entrance-picture-id183018477?b=1&k=20&m=183018477&s=170667a&w=0&h=v63J3xpGS9PRyRiKsiqP9zOK5Hx25Za6b0_u8JpdXco=",
      },
      {
        image:
          "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355556?b=1&k=20&m=1292355556&s=170667a&w=0&h=US0zgSIE-gULBOt9vfmvV4t3G5M5Xbpcm1VK126NRww=",
      },
    ],
  },
  {
    propName: "Burj khalifa",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },
      {
        image:
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    propName: "Burj khalifa",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },
    ],
  },

  {
    propName: "museium",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },

      {
        image:
          "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://media.istockphoto.com/photos/midsize-luxury-hotel-picture-id183238251?b=1&k=20&m=183238251&s=170667a&w=0&h=CpL1lOz7RQX1U20mAOoF4nBM79eRfZ7IWBteC5dV3Ro=",
      },
      {
        image:
          "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
  {
    propName: "The Royal ",
    price: "10,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "This apartment in the prestigious Atlantis -The Royal Residences, the property offers a luxurious convenience to its occupants,",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://images.unsplash.com/photo-1497287339422-24a36085bc70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },
    ],
  },
  {
    propName: "Burj khalifa",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1470043201067-764120126eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1523735039455-db70a4480860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://media.istockphoto.com/photos/resort-entrance-picture-id183018477?b=1&k=20&m=183018477&s=170667a&w=0&h=v63J3xpGS9PRyRiKsiqP9zOK5Hx25Za6b0_u8JpdXco=",
      },
      {
        image:
          "https://media.istockphoto.com/photos/hotel-reception-lobby-picture-id1292355556?b=1&k=20&m=1292355556&s=170667a&w=0&h=US0zgSIE-gULBOt9vfmvV4t3G5M5Xbpcm1VK126NRww=",
      },
    ],
  },
  {
    propName: "Burj khalifa",
    price: "50,000",
    address: "1 Sheik Mohammed bin Rashid Blvd",
    description:
      "Huge Al Haseen Residence is situated in Dubai Industrial City (DIC), one of the largest industrial hubs in Dubai",
    noOfBeds: "4",
    area: "350",
    floor: "3",
    noOfBathrooms: "3",
    agentName: "Nicola tesla",
    age: "30",
    expirence: "4",
    agentEmail: "hey@gmail.com",
    agentImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_fDbgnHqjQAl15otRugDlZ0IGz3qKUNo5w&usqp=CAU",

    SlideImages: [
      {
        image:
          "https://media.istockphoto.com/photos/dubai-mega-city-picture-id183346577?b=1&k=20&m=183346577&s=170667a&w=0&h=bcW1mjlMK2OtEZGvIb9gnWV4kN31WZXlNQY3exGJZJA=",
      },
      {
        image:
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        image:
          "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmclMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },
];

const HomeScreen = ({ props }) => {
  const [listingsdata, setListingsdata] = useState([]);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  console.log(loading);

  useEffect(() => {
    const getdata = async () => {
      setloading(true);
      const data1 = await fetch("https://rocky-springs-58380.herokuapp.com/listings/lim").then((res) => res.json());
      setListingsdata(data1.slice(0, 10));
      setloading(false);
    };

    getdata();
  }, []);

  const handleSearch = async () => {
    setloading(true);
    const data = await axios.get(`https://rocky-springs-58380.herokuapp.com/listings/search/${search}`);
    console.log(data.data);
    setloading(false);
    console.log(loading);
    setListingsdata(data.data ? data.data : []);
  };

  const textFieldStyle = {
    width: "100%",
    height: "60px",
    marginTop: "2px",
    borderRadius: "5px",

    fontSize: "20px",
    marginBottom: "10px",
  };

  if (loading) {
    return (
      <div style={{ height: "80vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <PropagateLoader color="#6600FF" />
      </div>
    );
  } else {
    return (
      <div style={{ marginLeft: "300px", padding: "20px" }}>
        {/* <TextField
      id="standard-basic"
      value={search}
      onChange={(e) => {
        setsearch(e.target.value);
      }}
      label="Search by property name"
      InputProps={{
        disableUnderline: true, // <== added this
      }}
      sx={textFieldStyle}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="search" onClick={handleSearch} edge="end">
            <SearchRounded />
          </IconButton>
        </InputAdornment>
      }
    /> */}

        {/* <Button onClick={handleSearch}>Search</Button> */}
        {/* <Typography className="none" variant="h4" color="initial" mb={1}>
      DashBoard
    </Typography> */}
        <FormControl sx={{ ml: 3, marginTop: "80px", width: "35ch", marginBottom: "20px" }} variant="filled">
          <InputLabel htmlFor="search">Search by name</InputLabel>
          <OutlinedInput
            sx={{ marginTop: "6px" }}
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search" onClick={handleSearch} edge="end">
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        {listingsdata.length > 1 ? (
          <div>
            <Grid container columnSpacing={0} spacing={3} alignItems="center">
              {listingsdata.map((data, index) => (
                <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
                  <NewCard {...data} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <div
            style={{
              height: "80vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* <PropagateLoader color="#6600FF" /> */}
            <h2>Oops, No data found...</h2>
            <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?size=626&ext=jpg" />
          </div>
        )}
      </div>
    );
  }

  // return (
  //   <div style={{ marginLeft: "300px", marginTop: "80px", padding: "20px" }}>
  //     {/* <TextField
  //       id="standard-basic"
  //       value={search}
  //       onChange={(e) => {
  //         setsearch(e.target.value);
  //       }}
  //       label="Search by property name"
  //       InputProps={{
  //         disableUnderline: true, // <== added this
  //       }}
  //       sx={textFieldStyle}
  //       endAdornment={
  //         <InputAdornment position="end">
  //           <IconButton aria-label="search" onClick={handleSearch} edge="end">
  //             <SearchRounded />
  //           </IconButton>
  //         </InputAdornment>
  //       }
  //     /> */}

  //     {/* <Button onClick={handleSearch}>Search</Button> */}
  //     {/* <Typography className="none" variant="h4" color="initial" mb={1}>
  //       DashBoard
  //     </Typography> */}
  //     {!loading && listingsdata.length > 0 ? (
  //       <div>
  //         <FormControl sx={{ ml: 3, width: "35ch", marginBottom: "20px" }} variant="filled">
  //           <InputLabel htmlFor="search">Search by name</InputLabel>
  //           <OutlinedInput
  //             sx={{ marginTop: "6px" }}
  //             value={search}
  //             onChange={(e) => {
  //               setsearch(e.target.value);
  //             }}
  //             endAdornment={
  //               <InputAdornment position="end">
  //                 <IconButton aria-label="search" onClick={handleSearch} edge="end">
  //                   <SearchRounded />
  //                 </IconButton>
  //               </InputAdornment>
  //             }
  //             label="Search"
  //           />
  //         </FormControl>
  //         <Grid container columnSpacing={0} spacing={3} alignItems="center">
  //           {listingsdata.map((data, index) => (
  //             <Grid key={index} item xs={12} md={6} lg={4} xl={3}>
  //               <NewCard {...data} />
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </div>
  //     ) : (
  //       <div style={{ height: "80vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
  //         <PropagateLoader color="#6600FF" />
  //       </div>
  //     )}
  //   </div>
  // );
};

export default HomeScreen;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListIcon from "@material-ui/icons/List";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
import earth from "./imgs/earth.svg";
import mars from "./imgs/mars.svg";
import venus from "./imgs/venus.svg";
import saturn from "./imgs/saturn1.svg";
import mercury from "./imgs/mercury.svg";
import eris from "./imgs/eris.svg";
import pluto from "./imgs/pluto.svg";
import ceres from "./imgs/ceres.svg";
import haumea from "./imgs/haumea.svg";
import makemake from "./imgs/makemake.svg";
import jupiter from "./imgs/jupiter.svg";
import warning from "./imgs/warning.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "170px",
    borderRadius: "25px",
    paddingRight: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "0px",
    marginLeft: "10%",
    overflow: "hidden",
  },
  imgStyle: {
    width: "170px",
    height: "170px",
    marginLeft: "-50px",
    marginTop: "-35px",
    filter: "drop-shadow(0 5mm 3mm #CAC8F1)",
  },
  title: {
    marginLeft: "1.25rem",
    marginTop: "0.5rem",
    fontSize: "1.8rem",
    fontFamily: "'Langar', cursive",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
      fontSize: "1.35rem",
    },
  },
  noData: {
    textAlign: "center",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    minHeight: "8vh",
    backgroundColor: "orange",
    textAlign: "center",
    padding: "18px",
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function App() {
  const classes = useStyles();
  const [planets, setPlanets] = useState([]);
  const [value, setValue] = useState(0);

  const handleFavourite = (index, fav, name) => (event) => {
    let newItem = { id: index, isFavourite: !fav, name: name };
    setPlanets(planets.map((item) => (item.id === index ? newItem : item)));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://assignment-machstatz.herokuapp.com/planet"
      );

      setPlanets(result.data);
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logo = (src, id) => {
    if (src === "mercury") {
      return (
        <img
          key={id}
          src={mercury}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "mars") {
      return (
        <img
          key={id}
          src={mars}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "venus") {
      return (
        <img
          key={id}
          src={venus}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "earth") {
      return (
        <img
          key={id}
          src={earth}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "ceres") {
      return (
        <img
          key={id}
          src={ceres}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "jupiter") {
      return (
        <img
          key={id}
          src={jupiter}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "saturn") {
      return (
        <img
          key={id}
          src={saturn}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "pluto") {
      return (
        <img
          key={id}
          src={pluto}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "haumea") {
      return (
        <img
          key={id}
          src={haumea}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "makemake") {
      return (
        <img
          key={id}
          src={makemake}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    } else if (src === "eris") {
      return (
        <img
          key={id}
          src={eris}
          alt={planets.id}
          className={classes.imgStyle}
        />
      );
    }
  };

  const found = () => {
    for (var i = 0; i < planets.length; i++) {
      if (planets[i].isFavourite === true) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
          centered
        >
          <Tab icon={<ListIcon />} label="LIST" {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <div className={classes.root}>
          <Grid container spacing={5} alignItems="center">
            {planets.map((planet) => (
              <Grid key={planet.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
                <Paper className={classes.paper} elevation={2}>
                  <Box display="flex" flexDirection="row">
                    <Box display="flex">{logo(planet.id)}</Box>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" flexwrap="wrap">
                        <Typography variant="p" className={classes.title}>
                          {planet.name}
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexwrap="wrap"
                        alignItems="flex-end"
                        style={{ height: "100%" }}
                      >
                        <Box>
                          <Typography
                            variant="p"
                            style={{
                              marginLeft: "1rem",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                              fontFamily: "'Nova Flat', cursive",
                            }}
                          >
                            Add to Favourites
                          </Typography>
                        </Box>
                        <Box>
                          <Switch
                            key={planets.id}
                            checked={planet.isFavourite}
                            onChange={handleFavourite(
                              planet.id,
                              planet.isFavourite,
                              planet.name
                            )}
                            inputProps={{ "aria-label": "secondary checkbox" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {found() === true ? (
          <Grid container spacing={3}>
            {planets.map((planet) => {
              if (planet.isFavourite === true)
                return (
                  <Grid
                    key={planet.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={3}
                  >
                    <Paper className={classes.paper} elevation={2}>
                      <Box display="flex" flexDirection="row">
                        <Box display="flex">{logo(planet.id)}</Box>
                        <Box display="flex" flexDirection="column">
                          <Box display="flex" flexwrap="wrap">
                            <Typography variant="p" className={classes.title}>
                              {planet.name}
                            </Typography>
                          </Box>
                          <Box
                            display="flex"
                            flexwrap="wrap"
                            alignItems="flex-end"
                            style={{ height: "100%" }}
                          >
                            <Box>
                              <Typography
                                variant="p"
                                style={{
                                  marginLeft: "1rem",
                                  fontSize: "0.9rem",
                                  fontWeight: "600",
                                  fontFamily: "'Nova Flat', cursive",
                                }}
                              >
                                Add to Favourites
                              </Typography>
                            </Box>
                            <Box>
                              <Switch
                                key={planets.id}
                                checked={planet.isFavourite}
                                onChange={handleFavourite(
                                  planet.id,
                                  planet.isFavourite,
                                  planet.name
                                )}
                                inputProps={{
                                  "aria-label": "secondary checkbox",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                );
            })}
          </Grid>
        ) : (
          <div className={classes.noData}>
            <Box display="flex" flexDirection="column">
              <Box display="flex">
                <img
                  src={warning}
                  style={{ width: "200px", margin: "0 auto" }}
                  alt="warning"
                />
              </Box>
              <Box>
                <Typography
                  variant="p"
                  style={{
                    paddingTop: "15px",
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    fontFamily: "'Nova Flat', cursive",
                    color: "#000",
                  }}
                >
                  No Favourite Selected
                </Typography>
              </Box>
            </Box>
          </div>
        )}
      </TabPanel>

      <div className={classes.footer}>
        <Typography
          variant="p"
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: "'Nova Flat', cursive",
            color: "white",
          }}
        >
          Made by
          <Link href="https://jaydeepdave.me" rel="noopener" target="_blank">
            &nbsp;Jaydeep Dave&nbsp;❤️
          </Link>
        </Typography>
      </div>
    </div>
  );
}

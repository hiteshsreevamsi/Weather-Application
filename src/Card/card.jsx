import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Redirect, Link, withRouter } from "react-router-dom";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 15,
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard(props) {
  var hourly = () => {
    var send = [];

    for (let i = props.pos; i < props.pos + 8; i++) {
      send.push(props.data.list[i]);
    }

    props.history.push({
      pathname: "/hourly",
      state: { data: send },
    });
  };
  const classes = useStyles();
  const {
    temp_min,
    temp_max,
    humidity,
    date,
    lat,
    long,
    sunrise,
    sunset,
    icon,
    description,
    main,
    city,
  } = props;

  const imgurl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <Card className={classes.root} onClick={hourly}>
      <CardHeader
        title={main}
        subheader={new Date(date).toDateString()}
      ></CardHeader>

      <CardMedia className={classes.media} image={imgurl} title={description} />
      <CardContent>
        <Typography variant='h6' align='left'>
          {" "}
          Low / High
        </Typography>
        <Typography>
          <span>{temp_min}</span>
          <span>&deg;C</span> <span>/ </span>
          <span>{temp_max}</span>
          <span>&deg;C</span>
        </Typography>
        <hr></hr>
        <span>
          <Typography align='left'>humidity : {humidity + " %"}</Typography>
        </span>
        <hr></hr>
        <Typography> Latitude: {lat}</Typography>
        <Typography> Longitude: {long}</Typography>
        <hr></hr>
        <Typography> City: {city}</Typography>
        <Typography>
          {" "}
          sunrise:{" "}
          {new Date(sunrise * 1000).getHours().toString() +
            ":" +
            new Date(sunrise * 1000).getMinutes().toString() +
            " AM"}
        </Typography>
        <Typography>
          {" "}
          sunrise:{" "}
          {new Date(sunset * 1000).getHours().toString() +
            ":" +
            new Date(sunset * 1000).getMinutes().toString() +
            " PM"}
        </Typography>
        <hr></hr>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
export default withRouter(SimpleCard);

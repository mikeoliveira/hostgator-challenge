import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const CardCustom = withStyles({
  root: {
    margin: "1px 5px",
    boxShadow: 'none',
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    minWidth: '320px',
  }
})(Card);

export { CardCustom };

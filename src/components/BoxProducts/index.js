import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";

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

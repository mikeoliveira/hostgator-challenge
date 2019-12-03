import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from "@material-ui/core";

import { withStyles } from "@material-ui/styles";

const RadioGroupCustom = withStyles({
  root: {
    margin: "20px 0px 45px 0px"
  }
})(RadioGroup);

const FormLabelCustom = withStyles({
  root: {
    textAlign: "center",
    fontFamily: '"Montserrat", sans-serif'
  }
})(FormLabel);

const FormControlLabelCustom = withStyles({
  root: {
    background: "#FFF",
    color: "white",
    height: 36,
    width: 121,
    padding: "0px 15px",
    boxShadow: "none",
    marginRight: 0,
    borderTop: "1px solid #4480C5",
    borderBottom: "1px solid #4480C5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:first-child": {
      borderRadius: "21px 0px 0px 21px",
      borderLeft: "1px solid #4480C5"
    },
    "&:last-child": {
      borderRadius: "0px 21px 21px 0px",
      borderRight: "1px solid #4480C5"
    }
  },
  label: {
    color: "#16437E",
    fontSize: 16,
    "& > span": {
      color: "#FFF"
    }
  }
})(FormControlLabel);

const RadioCustom = withStyles({
  root: {
    width: "18px",
    height: "18px",
    padding: 0,
    marginRight: 5,
    alignItems: "flex-end",
    "&:hover": {
      backgroundColor: "transparent !important"
    },
    "& span > div > svg": {
      width: 19,
      height: 19
    }
  },
  checked: {
    "& input + div": {
      color: "#FFF"
    }
  }
})(Radio);

const styleClass = () => ({
  radioPeriod: {
    zIndex: 1,
    background: "#4480C5",
    borderRadius: "21px !important",
    "& > span": {
      fontWeight: "bold",
      color: "#FFF !important"
    }
  },
  displayFlexElement: {
    display: "flex"
  },
  centerElement: {
    display: "flex",
    justifyContent: "center"
  },
  selectPeriodClass: {
    display: "flex",
    boxShadow: "0px 2px 4px #4480C570",
    borderRadius: "21px"
  },
  dividerCard: {
    padding: "35px 25px 35px 25px;",
    borderBottom: "2px solid #f1f6fb",
    background: '#FFFFFF',
  },
  listProductsElement: {
    display: "flex",
    flexDirection: "column",
    marginBottom: '40px',
    background: 'transparent',
    "& h3": {
      textAlign: "center",
      color: "#1D5297",
      marginTop: "10px",
      fontSize: "26px",
      fontWeight: "bold"
    },
    '&:before': {
      content: '""',
      borderTop: '12px solid #F1F6FB',
      borderRadius: '4px 4px 0px 0px',
    },
    '&:after' : {
      content: '""',
      borderBottom: "2px solid #F1F6FB",
      borderRadius: '0px 0px 4px 4px',
    }
  },
  listProductsElementOrange: {
    marginBottom: '40px',
    display: "flex",
    flexDirection: "column",
    background: 'transparent',
    "& h3": {
      textAlign: "center",
      color: "#1D5297",
      marginTop: "10px",
      fontSize: "26px",
      fontWeight: "bold"
    },
    '&:before': {
      content: '""',
      borderTop: '12px solid #FF6A17',
      borderRadius: '4px 4px 0px 0px',
    },
    '&:after' : {
      content: '""',
      borderBottom: "2px solid #FF6A17",
      borderRadius: '0px 0px 4px 4px',
    }
  },
  priceProductsElement: {
    textAlign: "center"
  },
  priceOriginal: {
    textDecoration: "line-through solid",
    fontSize: 13
  },
  priceDiscount: {
    fontWeight: "bold",
    marginLeft: "10px",
    fontSize: 13
  },
  priceDivided: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 300,
    color: "#1D5297",
    fontSize: 20,
    marginTop: 5,
    "& p": {
      fontSize: 13,
      textAlign: "center",
      "&:last-child": {
        fontSize: 20
      },
      "& span": {
        fontWeight: "bold",
        fontSize: 35,
        marginLeft: "5px"
      }
    }
  },
  priceBtnOrange: {
    textAlign: "center",
    marginTop: "30px",
    "& a": {
      fontSize: "22px",
      fontWeight: "bold",
      background: "#FF6A17",
      borderRadius: "21px",
      textDecoration: "none",
      color: "#FFF",
      padding: "8px 30px",
      transition: "all 1s",
      "&:hover": {
        background: "#FF6A4D"
      }
    }
  },
  priceBtn: {
    textAlign: "center",
    marginTop: "30px",
    "& a": {
      fontSize: "22px",
      fontWeight: "bold",
      background: "#4480C5",
      borderRadius: "21px",
      textDecoration: "none",
      color: "#FFF",
      padding: "8px 30px",
      transition: "all 1s",
      "&:hover": {
        background: "#16437E"
      }
    }
  },
  freeDomain1year: {
    marginTop: "35px",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: 0,
    color: "#333333",
    "@media (max-width: 1280px)": {
      fontSize: "20px"
    }
  },
  economicValuePercent: {
    marginTop: "10px",
    fontSize: "14px",
    letterSpacing: 0,
    color: "#1D5297",
    "@media (max-width: 1280px)": {
      fontSize: "18px"
    },
    "& span": {
      fontWeight: "bold",
      fontSize: "14px",
      letterSpacing: 0,
      color: "#FFFFFF",
      textTransform: "uppercase",
      background: "#51C99C",
      borderRadius: "21px",
      padding: "1px 5px",
      marginLeft: "5px",
      "@media (max-width: 1280px)": {
        fontSize: "18px"
      }
    }
  },
  listItems: {
    "& li": {
      fontSize: "16px",
      listStyle: "none",
      "@media (max-with: 1280px)": {
        fontSize: "32px"
      },
      marginTop: "10px"
    }
  },
  borderBottomDashed: {
    borderBottom: "1px dashed #9EB8DC"
  }
});

export {
  FormControlLabelCustom,
  RadioCustom,
  RadioGroupCustom,
  FormLabelCustom,
  styleClass
};

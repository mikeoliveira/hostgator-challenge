import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import { ReactComponent as LogoHostgator } from "../../assets/images/hostgator-logo.svg";
import { ReactComponent as IconCheck } from "../../assets/images/icon-check.svg";
import OfficeCowork from "../../assets/images/img-office-cowork.png";
import OfficeSomethings from "../../assets/images/img-office-somethings.png";

const styleClass = () => ({
  colorSvgLogo: {
    "& .c": {
      fill: "#f68b51 !important"
    }
  },
  bgWhite: {
    background: "#FFF"
  },
  bgBlue: {
    background: "#1D5297",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: "60px",
    position: "relative",
    "&:before": {
      bottom: "0px",
      left: "0",
      width: "100%",
      height: "65px",
      content: '""',
      position: "absolute",
      backgroundColor: "#f1f6fb"
    },
    "&:after": {
      bottom: "35px",
      right: "0",
      width: "100%",
      height: "30%",
      content: '""',
      position: "absolute",
      borderBottomLeftRadius: "100%",
      borderBottomRightRadius: "100%",
      backgroundColor: "#1d5297",
      zIndex: 1
    }
  },
  imgCowork: {
    zIndex: 2,
    "@media (max-width: 1024px)": {
      display: "none"
    }
  },
  imgOfficeSomething: {
    zIndex: 2,
    "@media (max-width: 1024px)": {
      display: "none"
    }
  },
  titlesHeader: {
    zIndex: 2,
    "& h2": {
      textAlign: "center",
      letterSpacing: "1.6px",
      color: "#B9D0EF",
      fontSize: "27px",
      "@media (max-width: 1024px)": {
        fontSize: "16px"
      },
      fontWeight: "600"
    },
    "& h1": {
      textAlign: "center",
      letterSpacing: "0px",
      color: "#FFF",
      fontSize: "40px",
      fontWeight: "Bold",
      "@media (max-width: 1024px)": {
        fontSize: "30px"
      }
    },
    "& h3": {
      textAlign: "center",
      color: "#B9D0EF",
      fontSize: "22px",
      "@media (max-width: 1024px)": {
        fontSize: "16px"
      },
      letterSpacing: "0px",
      paddingTop: "40px",
      "& p": {
        fontWeight: "200",
        paddingBottom: "10px",
        "& span": {
          marginLeft: "5px"
        }
      },
      "& svg": {
        marginRight: "5px"
      }
    }
  }
});

const ContainerCustom = withStyles({
  root: {
    width: "100%",
    maxWidth: "initial"
  }
})(Container);

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <ContainerCustom className={classes.bgWhite}>
          <Container>
            <LogoHostgator className={classes.colorSvgLogo} />
          </Container>
        </ContainerCustom>
        <ContainerCustom className={classes.bgBlue}>
          <img
            src={OfficeSomethings}
            alt="Office Somethings"
            className={classes.imgOfficeSomething}
          />
          <div className={classes.titlesHeader}>
            <h2>Hospedagem de Sites</h2>
            <h1>
              Tenha uma hospedagem de sites estável e evite perder visitantes
              diariamente
            </h1>
            <h3>
              <p>
                <IconCheck />
                99,9% de disponibilidade: seu site sempre no ar
              </p>
              <p>
                <span>
                  <IconCheck />
                  Suporte 24h, todos os dias
                </span>
                <span>
                  <IconCheck />
                  Painel de Controle cPanel
                </span>
              </p>
            </h3>
          </div>
          <img src={OfficeCowork} alt="CoWork" className={classes.imgCowork} />
        </ContainerCustom>
      </>
    );
  }
}

export default withStyles(styleClass)(Header);

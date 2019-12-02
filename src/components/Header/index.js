import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import { ReactComponent as LogoHostgator } from "../../assets/images/hostgator-logo.svg";
import { ReactComponent as IconCheck } from "../../assets/images/icon-check.svg";

import ArrowHeaderScroll from "../../assets/images/arrow-bottom-scroll.svg";
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
      bottom: "-1px",
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
    },
    "@media (min-width: 1280px)": {
      height: "430px"
    },
    "@media (max-width: 1280px)": {
      height: "340px"
    },
    "@media (max-width: 960px)": {
      height: "440px",
      "&:before": {
        height: "35px"
      },
      "&:after": {
        content: "none"
      }
    }
  },
  imgCowork: {
    zIndex: 2,
    maxWidth: "439px",
    width: "100%",
    height: "auto",
    maxHeight: "353px",
    paddingTop: "50px",

    "& img": {
      width: "100%"
    },
    "@media (min-width: 1280px) and (max-width: 1520px)": {
      maxWidth: "285px"
    },
    "@media (max-width: 1280px)": {
      display: "none"
    }
  },
  imgOfficeSomething: {
    zIndex: 2,
    maxWidth: "439px",
    width: "100%",
    height: "auto",
    maxHeight: "353px",
    paddingTop: "25px",
    "& img": {
      width: "100%"
    },
    "@media (min-width: 1280px) and (max-width: 1520px)": {
      maxWidth: "285px"
    },
    "@media (max-width: 1280px)": {
      display: "none"
    }
  },
  titlesHeader: {
    width: "100%",
    zIndex: 2,
    "& h2": {
      textAlign: "center",
      letterSpacing: "1.6px",
      color: "#B9D0EF",
      fontSize: "27px",
      "@media (max-width: 1280px)": {
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
      "@media (max-width: 1280px)": {
        fontSize: "30px",
        maxWidth: "780px",
        margin: "0 auto"
      }
    },
    "& h3": {
      textAlign: "center",
      color: "#B9D0EF",
      fontSize: "22px",
      "@media (max-width: 1280px)": {
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
      },
      "@media (max-width: 920px)": {
        width: "280px",
        margin: "0 auto",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        "& p": {
          textAlign: 'center',
          display: 'flex',
        },
        "& span": {

        }
      }
    }
  },
  arrowHeaderScroll: {
    display: "flex",
    justifyContent: "center",
    "& img": {
      marginTop: "-55px",
      marginLeft: "-25px",
      position: "absolute",
      zIndex: "3"
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
          <div className={classes.imgOfficeSomething}>
            <img src={OfficeSomethings} alt="Office Somethings" />
          </div>

          <div className={classes.titlesHeader}>
            <h2>Hospedagem de Sites</h2>
            <h1>
              Tenha uma hospedagem de sites estável e evite perder visitantes
              diariamente
            </h1>
            <h3>
              <p>
                <span>
                  <IconCheck />
                </span>
                  99,9% de disponibilidade: seu site sempre no ar

              </p>
              <p>
                <span>
                  <IconCheck />
                </span>
                  Suporte 24h, todos os dias

              </p>
              <p>
                <span>
                  <IconCheck />
                </span>
                  Painel de Controle cPanel
              </p>
            </h3>
          </div>
          <div className={classes.imgCowork}>
            <img src={OfficeCowork} alt="CoWork" />
          </div>
        </ContainerCustom>
        <ContainerCustom>
          <div className={classes.arrowHeaderScroll}>
            <a href='#'>
              <img src={ArrowHeaderScroll} alt="Arrow scroll page" />
            </a>
          </div>
        </ContainerCustom>
      </>
    );
  }
}

export default withStyles(styleClass)(Header);

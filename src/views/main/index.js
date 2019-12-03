import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import Container from "../../components/container";
import Header from "../../components/header";
import {
  FormControlLabelCustom,
  RadioCustom,
  RadioGroupCustom,
  FormLabelCustom,
  styleClass
} from "./styles";
import { CardCustom } from "../../components/boxProducts";
import FormControl from "@material-ui/core/FormControl";

import IconPlanP from "../../assets/images/icon-plan-p.png";
import IconPlanM from "../../assets/images/icon-plan-m.png";
import IconPlanTurbo from "../../assets/images/icon-plan-turbo.png";

import { ReactComponent as IconInfo } from "../../assets/images/icon-info.svg";

import api from "../../services/api";

class Main extends Component {
  state = {
    selectPeriod: "",
    products: [],
    showPeriodProduct: [],
    showPeriodProductLabels: [],
    discountPercent: "",
    normalizePrices: []
  };

  handleInputChange = e => {
    this.setState({ selectPeriod: e.target.value });
    console.log("e.target.value: ", e.target.value);

    this.normalizeCalcPrice(e.target.value);
  };

  // Enviar os dados do produto escolhido
  handleSubmit = e => {};

  componentDidMount = async e => {
    const selectPeriod = this.state;
    const products = await api.get(api.baseURL);

    const normalizeData = Object.values(products.data.shared.products);

    const showPeriodProduct = [36, 12, 1];

    this.setState({
      products: normalizeData,
      showPeriodProduct: showPeriodProduct,
      selectPeriod: "triennially",
      discountPercent: 40
    });

    this.normalizeCalcPrice(selectPeriod);
  };

  normalizeLabelPeriod(period) {
    if (period < 12) {
      if (period === 1) {
        return String(period) + " mês";
      }
      return String(period) + " meses";
    } else {
      let result = period / 12;
      if (result === 1) {
        return String(result) + " ano";
      }
      return String(result) + " anos";
    }
  }

  normalizePeriod(period) {
    switch (period) {
      case 1:
        return "monthly";
      case 3:
        return "quarterly";
      case 6:
        return "semiannually";
      case 12:
        return "annually";
      case 24:
        return "biennially";
      case 36:
        return "triennially";

      default:
        return "custom";
    }
  }

  normalizeIconProduct(idProduct) {
    switch (idProduct) {
      case 5:
        return IconPlanP;
      case 6:
        return IconPlanM;
      case 335:
        return IconPlanTurbo;
      default:
        return "";
    }
  }

  normalizeCalcPrice(value) {
    const { discountPercent, products, selectPeriod } = this.state;
    if (value) {
      value = selectPeriod;
    }
    let priceNormalize = [];
    let priceDivided, priceDiscount, priceCompared;
    /**
     * type = ['discount', 'price']
     * ['divide', price]
     * ['discount-total', price]
     */
    products.map(period => {
      // Divide the price per months of product's plan
      priceDivided = Number(
        (period.cycle[value].priceOrder / period.cycle[value].months).toFixed(2)
      );

      priceDiscount = Number(
        ((discountPercent * period.cycle[value].priceOrder) / 100).toFixed(2)
      );

      priceCompared = Number(
        (period.cycle[value].priceOrder - priceDiscount).toFixed(2)
      );

      priceNormalize[period.id] = [
        { priceOriginal: period.cycle[value].priceOrder },
        { priceDivided: priceDivided },
        { priceDiscount: priceDiscount },
        { priceCompared: priceCompared }
      ];
    });

    this.setState({
      normalizePrices: priceNormalize
    });
  }

  showPrice(value, typePrice) {
    let valueString;
    value.forEach(element => {
      Object.keys(element).forEach(function(key) {
        if (key === typePrice) {
          valueString = element[typePrice];
        }
      });
    });
    return valueString;
  }

  render() {
    const {
      products,
      showPeriodProduct,
      selectPeriod,
      normalizePrices,
      discountPercent
    } = this.state;

    const { classes } = this.props;

    return (
      <>
        <Header></Header>
        <Container>
          <FormControl
            component="fieldset"
            className={classes.displayFlexElement}
          >
            <FormLabelCustom component="legend">
              Quero pagar a cada:
            </FormLabelCustom>
            <RadioGroupCustom
              aria-label="selectPeriod"
              name="period"
              value={selectPeriod}
              onChange={this.handleInputChange}
              row
              className={classes.centerElement}
            >
              <div className={classes.selectPeriodClass}>
                {showPeriodProduct.map(period => (
                  <FormControlLabelCustom
                    key={String(period)}
                    value={this.normalizePeriod(period)}
                    className={
                      this.normalizePeriod(period) === selectPeriod
                        ? classes.radioPeriod
                        : ""
                    }
                    control={<RadioCustom />}
                    label={this.normalizeLabelPeriod(period)}
                    labelPlacement="end"
                  />
                ))}
              </div>
            </RadioGroupCustom>
          </FormControl>
          <section className={classes.centerElement}>
            {products.map(product => (
              <CardCustom
                className={(product.id === 6)? classes.listProductsElementOrange : classes.listProductsElement}
                key={String(product.id)}
              >
                <div className={classes.dividerCard}>
                  <div className={classes.centerElement}>
                    <img
                      src={this.normalizeIconProduct(product.id)}
                      alt={product.name}
                    />
                  </div>
                  <h3>{product.name}</h3>
                </div>
                <div className={classes.dividerCard}>
                  <div className={classes.priceProductsElement}>
                    <div className={classes.centerElement}>
                      <span className={classes.priceOriginal}>
                        R$
                        {normalizePrices[product.id]
                          ? this.showPrice(
                              normalizePrices[product.id],
                              "priceOriginal"
                            )
                          : ""}
                      </span>
                      <span className={classes.priceDiscount}>
                        R$
                        {normalizePrices[product.id]
                          ? this.showPrice(
                              normalizePrices[product.id],
                              "priceDiscount"
                            )
                          : ""}
                      </span>
                    </div>
                    <div className={classes.priceDivided}>
                      <p>equivalente</p>
                      <p>
                        R$
                        <span>
                          {normalizePrices[product.id]
                            ? this.showPrice(
                                normalizePrices[product.id],
                                "priceDivided"
                              )
                            : ""}
                        </span>{" "}
                        /mês
                      </p>
                    </div>
                    <div className={(product.id === 6)? classes.priceBtnOrange : classes.priceBtn}>
                      <a href={"?a=add&pid="+ String(product.id)+"&billingcycle="+selectPeriod+"&promocode=PROMOHG40"}>Contrate Agora</a>
                    </div>

                    <div className={classes.freeDomain1year}>
                      1 ano de Domínio Grátis.{" "}
                      <span>
                        <a href="#">
                          <IconInfo />
                        </a>
                      </span>
                    </div>
                    <div className={classes.economicValuePercent}>
                      economize R$
                      {normalizePrices[product.id]
                        ? this.showPrice(
                            normalizePrices[product.id],
                            "priceCompared"
                          )
                        : ""}
                      <span>{discountPercent}% off</span>
                    </div>
                  </div>
                </div>
                <div className={classes.dividerCard}>
                  <ul className={classes.listItems}>
                    <li><span className={classes.borderBottomDashed}>Para 1 site</span></li>
                    <li><b>{(product.id === 335)?'150':'100' } GB</b> de Armazenamento</li>
                    <li> <span className={classes.borderBottomDashed}>Contas de E-mail <b>Ilimitadas</b></span></li>
                    <li>Criador de Sites <u><b>Grátis</b></u> </li>
                    <li>Certificado SSL <b>Grátis</b> (https)</li>
                  </ul>
                </div>
              </CardCustom>
            ))}
          </section>
        </Container>
      </>
    );
  }
}

export default withStyles(styleClass)(Main);

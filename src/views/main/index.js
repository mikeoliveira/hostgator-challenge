import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";

import BoxProducts from "../../components/boxProducts";
import Container from "../../components/container";
import Header from "../../components/header";
import {
  FormControlLabelCustom,
  RadioCustom,
  RadioGroupCustom,
  styleClass
} from "./styles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";



import api from "../../services/api";

class Main extends Component {
  state = {
    selectPeriod: "",
    products: [],
    showPeriodProduct: [],
    showPeriodProductLabels: [],
    discountPercent: ""
  };

  handleInputChange = e => {
    this.setState({ selectPeriod: e.target.value });
  };

  // Enviar os dados do produto escolhido
  handleSubmit = e => {};

  componentDidMount = async e => {
    const products = await api.get(api.baseURL);

    const normalizeData = Object.values(products.data.shared.products);

    const showPeriodProduct = [36, 12, 1];

    this.setState({
      products: normalizeData,
      showPeriodProduct: showPeriodProduct,
      selectPeriod: "triennially",
      discountPercent: 40
    });
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

  normalizeCalcPrice(value) {
    const { discountPercent } = this.state;
    /**
     * type = ['discount', 'price']
     * ['divide', price]
     * ['discount-total', price]
     */

    // Divide the price per months of product's plan
    const priceDivided = Number((value.priceOrder / value.months).toFixed(2));

    const priceDiscount = Number(
      ((discountPercent * value.priceOrder) / 100).toFixed(2)
    );

    const priceCompared = Number((value.priceOrder - priceDiscount).toFixed(2));

    const priceNormalize = [
      { priceOriginal: value.priceOrder },
      { priceDivided: priceDivided },
      { priceDiscount: priceDiscount },
      { priceCompared: priceCompared }
    ];

    return priceNormalize;
  }

  render() {
    const { products, showPeriodProduct, selectPeriod } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Header></Header>
        <Container>
          <FormControl
            component="fieldset"
            className={classes.displayFlexElement}
          >
            <FormLabel component="legend"></FormLabel>
            <RadioGroupCustom
              aria-label="selectPeriod"
              name="period"
              value={selectPeriod}
              onChange={this.handleInputChange}
              row
              className={classes.centerElement}
            >
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
            </RadioGroupCustom>
          </FormControl>
          <BoxProducts>
            {products.map(product => (
              <li key={String(product.id)}>
                {product.name}
                <div>
                  {this.normalizeCalcPrice(product.cycle[selectPeriod]).map(
                    (value, index) => (
                      <div
                        key={
                          "productId-" +
                          String(product.id) +
                          "-" +
                          String(index)
                        }
                      >
                        {value.priceOriginal}
                        {value.priceCompared}
                        {value.priceDiscount}
                        {value.priceDivided}
                      </div>
                    )
                  )}
                </div>
                <span>{JSON.stringify(product.cycle[selectPeriod])}</span>
              </li>
            ))}
          </BoxProducts>
        </Container>
      </>
    );
  }
}

export default withStyles(styleClass)(Main);

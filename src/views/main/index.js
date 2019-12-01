import React, { Component } from "react";

import BoxProducts from "../../components/BoxProducts";
import Container from "../../components/Container";

import { Form } from "./styles";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    selectPeriod: "",
    products: [],
    showPeriodProduct: [],
    showPeriodProductLabels: []
  };

  handleInputChange = e => {

    this.setState({ selectPeriod: e.target.value });
  };

  handleSubmit = e => {

  };

  componentDidMount = async e => {
    const products = await api.get(api.baseURL);

    const normalizeData = Object.values(products.data.shared.products);

    const showPeriodProduct = [36, 12, 1];

    this.setState({
      products: normalizeData,
      showPeriodProduct: showPeriodProduct,
      selectPeriod: 'triennially'
    });
  };

  normalizeLabelPeriod(period) {
    if (period < 12) {
      if (period === 1) {
        return String(period) + " mês";
      } else {
        return String(period) + " meses";
      }
    } else {
      let result = period / 12;
      if (result === 1) {
        return String(result) + " ano";
      } else {
        return String(result) + " anos";
      }
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

  render() {
    const { products, showPeriodProduct, selectPeriod } = this.state;

    // console.log(showPeriodProductLabels);
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {showPeriodProduct.map(period => (
            <label key={String(period)}>
              <input
                type="radio"
                value={this.normalizePeriod(period)}
                checked={selectPeriod === this.normalizePeriod(period)}
                onChange={this.handleInputChange}
              />
              {this.normalizeLabelPeriod(period)}
            </label>
          ))}
        </Form>
        <BoxProducts>
          {products.map(product => (
            <li key={String(product.id)}>
              {product.name}
              {}
              <span>
                {JSON.stringify(product.cycle[selectPeriod])}
              </span>
            </li>
          ))}
        </BoxProducts>
      </Container>
    );
  }
}

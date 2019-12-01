import React, { Component } from "react";

import BoxProducts from "../../components/BoxProducts";
import Container from "../../components/Container";

import { Form } from "./styles";

import api from "../../services/api";

export default class Main extends Component {
  state = {
    selectPeriod: "",
    products: [],
    selectedOption: "",
    showPeriodProduct: [],
  };

  handleInputChange = e => {
    this.setState({ selectPeriod: e.target.value });
  };

  handleSubmit = e => {};

  componentDidMount = async e => {
    const products = await api.get(api.baseURL);

    const normalizeData = Object.values(products.data.shared.products);

    const showPeriodProduct = [ 36, 12, 1 ];

    this.setState({
      products: normalizeData,
      showPeriodProduct: showPeriodProduct,
    });
  };

  render() {
    const { products, showPeriodProduct } = this.state;

    console.log(products);
    return (
      <Container>
          {products.map(product => (
            Object.values(product.cycle).map(period => (

              <li hidden={!(showPeriodProduct.includes(period.months))}>
                {product.name} {period.months}
              </li>



            ))
          ))}
        <Form onSubmit={this.handleSubmit}>
          {/* <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={ selectedOption === "monthly"}
              />
              1 mês
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={ selectedOption === "annually"}
              />
              1 ano
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                checked={ selectedOption === "triennially"}
              />
              3 anos
            </label>
          </div> */}
        </Form>
        <BoxProducts>
          {products.map(product => (
            <li key={String(product.id)}>{product.name}</li>
          ))}
        </BoxProducts>
      </Container>
    );
  }
}

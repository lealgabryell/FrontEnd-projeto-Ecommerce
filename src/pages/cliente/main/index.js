import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3003/sistema/clientes/")
      .then((response) => response.json())
      .then((data) => this.setState({ clientes: data }));
  }

  render() {
    const { clientes } = this.state;

    return (
      <div className="cliente-list">
        {clientes.map((cliente, index) => (
          <div key={index}>
            <strong>{cliente.nome}</strong>
            <article>
              <h5>{cliente.email}</h5>
              <p>
                <Link to={`/clientes/${cliente.cpf}`}>Detalhes</Link>
              </p>
              <br />
            </article>
          </div>
        ))}
      </div>
    );
  }
}

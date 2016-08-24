import React, { Component } from "react";
import PokemonLocator from "../components/pokemon";

export default class Pokemon extends Component {
  static displayName = "PokemonLocatorPage";
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Pokémon Go Locator</h2>
        <PokemonLocator /> 
      </div>
    );
  }
}

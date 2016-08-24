import React from "react";
import request from "superagent";

import { Col, Button, Badge, Form, Input } from "react-bootstrap";

const post = (url, content, cb) => {
  request.post(url)
	.set("Accept", "application/json")
  .set("Content-Type", "application/json")
	.send(content)
  .end(cb);
};

const log = (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
};

export default class PokemonLocator extends React.Component {
  static displayName = "PokémonLocator";
  static propTypes = { initialCount: React.PropTypes.number };
  static defaultProps = { initialCount: 0 };

  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  handleSubmit = (e) => {
    e.preventDefault();

		const pokemon = this.refs.pokemon.getValue();
		const userloc = this.refs.userloc.getValue();
		const radius = this.refs.radius.getValue();

		post("/pokepage", { pokemon: pokemon, userloc: userloc, radius: radius}, log);
  }

  render() {
    return (
      <div>
        <h3>Pokémon</h3>
        <Col md={3} mdOffset={4}>
          <form onSubmit={this.handleSubmit}>
            <Input type="text" ref="pokemon" placeholder="Pikachu" label="Pokémon Name" />
            <Input type="text" ref="userloc" placeholder="1234 My Drive, Central City, NY 10000" label="Your Location" />
            <Input type="text" ref="radius" placeholder="1.0" label="Search radius (miles)" />
            <Button type="submit" bsStyle="success" className="pull-right">Search</Button>
          </form>
        </Col>
      </div>
    );
  }
}

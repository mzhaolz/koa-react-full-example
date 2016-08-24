import React from "react";
import request from "superagent";

import { Col, Button, Badge, Form, Input } from "react-bootstrap";

const get = (url, cb) => {
  request.get(url)
  .set("Content-Type", "application/json")
  .end(cb);
};

export default class PokemonLocator extends React.Component {
  static displayName = "PokémonLocator";
  static propTypes = { initialCount: React.PropTypes.number };
  static defaultProps = { initialCount: 0 };

  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  componentWillMount() {
    get("/value", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ count: res.body.count });
    });
  }

  onClickInc = (event) => {
    event.preventDefault();
    get("/inc", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ count: res.body.count });
    });
  }

  onClickDec = (event) => {
    event.preventDefault();
    get("/dec", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({ count: res.body.count });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //TODO(mzhaolz): handle the submit
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

import React, { Component } from 'react';

class Joke extends Component {
  state = { joke: {} };

  componentWillMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    const { setup, punchline } = this.state.joke;

    //prettier-ignore
    return (
      <div>
        <div>
            <h2>Vai uma piada ai?</h2>
            <p>{setup} <em>{punchline}</em></p>
        </div>
      </div>
    );
  }
}

export default Joke;

import React, { Component } from 'react';

import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

import profile from '../assets/profile.png';

class App extends Component {
  state = { counter: 0, displayBio: false };

  // addCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="Profile image" className="profile" />
        <h1>Meu Portifólio!</h1>
        <p>Olá, meu nome é Gustavo Biasi</p>
        <Title />
        {this.state.displayBio ? (
          <div>
            <p>Eu moro em uberlândia, sou um Analista de Sistemas na Linx S.A.</p>
            <p>Este é o meu primeiro app de exemplo para o treinamento do react!</p>
            <button onClick={this.toggleDisplayBio}>Ver menos</button>
          </div>
        ) : (
          <button onClick={this.toggleDisplayBio}>Ver mais</button>
        )}
        {/* <p>{this.state.counter}</p>
        <button onClick={this.addCounter}>AddCounter</button> */}
        <br />
        <Projects />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;

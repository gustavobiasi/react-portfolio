import React, { Component } from 'react';

const TITLES = ['JavaScript', 'Java', 'React', 'Delphi', '....'];

//class Component
class Title extends Component {
  state = { titleIndex: 0 };

  //quando abre o ver mais  lifecycle component
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);

    this.animateTitles();
  }

  //quando vai fechar o ver menos lifecycle component
  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  //helper method = que é um metodo auxiliar no desenvolvimento do componente
  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  };

  //Life Cycle component
  render() {
    const { titleIndex, fadeIn } = this.state;

    const title = TITLES[titleIndex];

    return <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>eu sei programar em {title}</p>;
  }
}

export default Title;

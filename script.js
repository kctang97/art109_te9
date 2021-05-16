class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false };

  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'div',
      { onClick: () => this.setState({isToggleOn: true }) },
      'Like'
    );
  }
}

window.onload = event => {
  ReactDOM.render(
    React.createElement(Button, null),
    document.getElementById("buttonWText")
  );
};

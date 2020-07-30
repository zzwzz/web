import React from 'react';

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return <div>helwo</div>;
  }
}

export default Foo;

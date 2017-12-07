import React from 'react';

class Child extends React.Component {
  
  render() {
    return (
      <div>
        <br/>
        --- you have entered ---
        <br/>
        {this.props.data}
      </div>
    );
  }
}

export default Child;

import React from 'react';

class Child extends React.Component {

  render() {
    return (
      <div>
        <br/>
        --- S what you have entered ---
        stash1
        stash2
        4
        5
        8
        11
        12
        20
        15
new commit on 21
        <br/>
        {this.props.data}
      </div>
    );
  }
}

export default Child;

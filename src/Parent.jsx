import React from 'react';
import Child from './Child.jsx'

class Parent extends React.Component {
  constructor() {
      super();
      this.state={
        data: ""
      }
      this.changeData = this.changeData.bind(this)
  }
  // update data in state
  changeData(event) {
      this.setState ({
          data: event.target.value
      })
  }
  render() {
    return (
      <div>
        <center>
            <h1>Sample App</h1>
            <input type="text" value={this.state.data} onChange={this.changeData} />
            <Child data={this.state.data}/>
        </center>
      </div>
      
    );
  }
}

export default Parent;

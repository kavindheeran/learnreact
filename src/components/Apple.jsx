import React, { Component } from 'react'

class Apple extends Component {
  render() {
    const {appleInfo} = this.props;
    const { type, color } = appleInfo
    return (
      <div>
        <h2> This is second class component comtains AppleInfo and {type} and {color}</h2>
      </div>
    )
  }
}

export default Apple
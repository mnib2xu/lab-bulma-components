import React, { Component } from 'react'

export default class CoolButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-rounded my-class is-danger is-small">{this.props.children}</button>
      </div>
    )
  }
}
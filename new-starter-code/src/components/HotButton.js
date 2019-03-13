import React, { Component } from 'react'

export default class HotButton extends Component {
  render() {
    return (
      <div>
        <button className="button is-small is-success">{this.props.children}</button>
      </div>
    )
  }
}
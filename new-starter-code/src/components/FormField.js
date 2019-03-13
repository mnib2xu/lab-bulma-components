import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="e.g Alex Smith"/>
            </div>
            </div>
            <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input type={this.props.placeholder} placeholder={this.props.placeholder}/>
            </div>
        </div>
         {this.props.label}
      </div>
    )
  }
}

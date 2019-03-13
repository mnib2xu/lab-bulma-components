import React, { Component } from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import HotButton from './HotButton';



export default class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Signup</CoolButton>
        <HotButton isSmall isSuccess>Login</HotButton>
      </div>
    )
  }
}

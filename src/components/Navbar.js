import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>SCapp</h1>
        <ul>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>
            <li>İletişim</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
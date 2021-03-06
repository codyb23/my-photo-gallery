import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid ">
        <div className="container d-flex flex-column align-items-center ">
          <Link to="/">
            <h1 className="headerTitle display-4">Things I Enjoy</h1>{' '}
          </Link>
          <p class="lead">
            These are the things that I enjoy
          </p>
        </div>
      </header>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background: #222;
  padding: 5px 20px;

  ul {
    list-style-type: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .logo a:hover {
    text-decoration: none;
  }
  .menu li {
    font-size: 16px;
    padding: 15px 5px;
    white-space: nowrap;
  }
  .logo a,
  .toggle a {
    font-size: 20px;
  }
  .button.secondary {
    border-bottom: 1px #444 solid;
  }
  /* Mobile menu */
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .toggle {
    order: 1;
  }
  .item.button {
    order: 2;
  }
  .item {
    width: 100%;
    text-align: center;
    order: 3;
    display: none;
  }
  .item.active {
    display: block;
  }
  /* Tablet menu */
  @media all and (min-width: 600px) {
    .menu {
      justify-content: center;
    }
    .logo {
      flex: 1;
    }
    .toggle {
      flex: 1;
      text-align: right;
    }
    .item.button {
      width: auto;
      order: 1;
      display: block;
    }
    .toggle {
      order: 2;
    }
    .button.secondary {
      border: 0;
    }
    .button a {
      padding: 7.5px 15px;
      background: teal;
      border: 1px #006d6d solid;
    }
    .button.secondary a {
      background: transparent;
    }
    .button a:hover {
      text-decoration: none;
    }
    .button:not(.secondary) a:hover {
      background: #006d6d;
      border-color: #005959;
    }
    .button.secondary a:hover {
      color: #ddd;
    }
  }
  /* Desktop menu */
  @media all and (min-width: 900px) {
    .item {
      display: block;
      width: auto;
    }
    .toggle {
      display: none;
    }
    .logo {
      order: 0;
    }
    .item {
      order: 1;
    }
    .button {
      order: 2;
    }
    .menu li {
      padding: 15px 10px;
    }
    .menu li.button {
      padding-right: 0;
    }
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <ul className="menu">
          <li className="logo">
            <Link to="/">Vibey</Link>
          </li>
          <li className="item">
            <Link to="/">Songs</Link>
          </li>

          <li className="item button">
            <a href="/create">Share New Song</a>
          </li>
          <li className="item button secondary">
            <Link to="/user">Sign Up</Link>
          </li>
          {/* <li className="toggle">
            <a href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li> */}
        </ul>
      </StyledNavbar>
    );
  }
}

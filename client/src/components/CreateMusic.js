import React, { Component } from 'react';

export default class CreateMusic extends Component {
  constructor(props) {
    super(props);

    this.userInput = React.createRef();

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFavoriteSong = this.onChangeFavoriteSong.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      favoriteSong: '',
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user',
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeFavoriteSong(e) {
    this.setState({
      favoriteSong: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const music = {
      username: this.state.username,
      favoriteSong: this.state.favoriteSong,
    };

    console.log(music);

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Share New Song</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref={this.userInput}
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Favorite Song: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.favoriteSong}
              onChange={this.onChangeFavoriteSong}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Creates Favorite Song"
              className="button"
            />
          </div>
        </form>
      </div>
    );
  }
}

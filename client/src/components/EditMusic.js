import React, { Component } from 'react';
import axios from 'axios';

export default class EditMusic extends Component {
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
    axios
      .get('http://localhost:5000/music/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          favoriteSong: res.data.favoriteSong,
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    axios.get('http://localhost:5000/users/').then((res) => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map((user) => {
            return user.username;
          }),
        });
      }
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

    axios
      .post(
        'http://localhost:5000/music/update/' + this.props.match.params.id,
        music
      )
      .then((res) => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Song</h3>
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
              value="Edits Favorite Song"
              className="button"
            />
          </div>
        </form>
      </div>
    );
  }
}

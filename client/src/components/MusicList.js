import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Song = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.favoriteSong.username}</td>
      <td>{props.favoriteSong.favoriteSong}</td>
      <td>
        <Link to={'/edit/' + props.favoriteSong._id}>edit</Link> |{' '}
        <button
          href="#"
          onClick={() => {
            props.deleteMusic(props.favoriteSong._id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default class MusicList extends Component {
  constructor(props) {
    super(props);

    this.deleteMusic = this.deleteMusic.bind(this);

    this.state = { music: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/music/')
      .then((res) => {
        this.setState({ music: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteMusic(id) {
    axios
      .delete('http://localhost:5000/music/' + id)
      .then((res) => console.log(res.data));
    this.setState({
      music: this.state.music.filter((el) => el._id !== id),
    });
  }

  musicList() {
    return this.state.music.map((currentSong) => {
      return (
        <Song
          favoriteSong={currentSong}
          deleteMusic={this.deleteMusic}
          key={currentSong._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Music Shared</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Favorite Song</th>
            </tr>
          </thead>
          <tbody>{this.musicList()}</tbody>
        </table>
      </div>
    );
  }
}

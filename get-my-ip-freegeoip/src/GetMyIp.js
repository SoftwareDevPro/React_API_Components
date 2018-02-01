
import React, { Component } from 'react';

class GetMyIp extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null, error: null };
  }

  componentDidMount() {
    // use window.fetch
    fetch("https://freegeoip.net/json/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            error: null
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            data: null,
            error: error
          });
        }
      )
  }

  render() {

    const { data, error } = this.state;
    var ip = null;

    let styles = {
      App: {
        textAlign: 'center'
      }
    }

    if (data) {
      ip = data.ip;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div style={styles.App}>
          <h1>{ip}</h1>
        </div>
      );
    }
  }
}

export default GetMyIp;

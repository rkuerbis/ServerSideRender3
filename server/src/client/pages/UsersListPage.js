import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

renderUsers() {
  return this.props.users.map(user => {
    return <li key={user.id}>{user.name}</li>;
  });
}

head() {
  return (
    <Helmet>
      <title>{`${this.props.users.length} Users Loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>

  );

}

  render() {
    return (
      <div>
        { this.head() }
        <h5>Here is a big list of users:</h5>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
//  console.log('I am trying to load some data!');
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <TodoList />
      </ApolloProvider>
    );
  }
}

export default App;

import React from 'react';

export class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>
    }

    return this.props.children;
  }
}

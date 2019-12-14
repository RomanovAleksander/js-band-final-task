import React from 'react';

import './errorBoundry.css';

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
      return <div className="error-boundry">Ops... Something went wrong</div>
    }

    return this.props.children;
  }
}

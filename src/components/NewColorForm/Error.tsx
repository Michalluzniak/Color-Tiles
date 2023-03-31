import React from 'react';

interface ErrorProps {
  children: React.ReactNode;
}

export class Error extends React.Component<ErrorProps> {
  render() {
    return <div className="new-color-error">{this.props.children}</div>;
  }
}

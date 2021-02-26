import React, { Component, ErrorInfo, ReactNode } from 'react';
// Code pulled from
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ', error, errorInfo);
    this.setState({ hasError: true, error });
  }

  public render() {
    if (this.state.hasError) {
      // location.href = '/'
      return (
        <>
          <h2 className="desc">Sorry.. there was an error</h2>
          <p className="desc">{this.state.error?.name}</p>
          <p className="desc">{this.state.error?.message}</p>
          <p className="desc">{this.state.error?.stack}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

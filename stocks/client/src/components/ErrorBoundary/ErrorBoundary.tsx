import { Component } from "react";

import "./ErrorBoundary.css";

/**
 * Handle & capture Application level errors
 */
export class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div className="Error-Image-Overlay">
          <div className="Error-Image-Container"></div>
          <div className="Error-Image-Text">Sorry this page is broken.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

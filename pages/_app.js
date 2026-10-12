import React from "react";
import "../styles/globals.css";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-neutral-100 px-6 py-10 font-sans text-neutral-900">
          <h1 className="text-lg font-semibold">This page could not be displayed</h1>
          <p className="mt-2 text-sm text-neutral-600">
            A client-side error occurred. Open the browser console (F12) for
            details, or run{" "}
            <code className="rounded bg-neutral-200 px-1 py-0.5 text-xs">
              npm run dev:clean
            </code>{" "}
            and use the exact Local URL shown in the terminal.
          </p>
          <pre
            className="mt-6 max-w-3xl overflow-x-auto rounded border border-neutral-200 bg-white p-4 text-left text-xs text-red-800"
            tabIndex={0}
          >
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <AppErrorBoundary>
      <div className="min-w-0 overflow-x-clip">
        <Component {...pageProps} />
      </div>
    </AppErrorBoundary>
  );
}

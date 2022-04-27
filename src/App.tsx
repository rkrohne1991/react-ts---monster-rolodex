import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";

import MonstersContainer from "./components/monsters-container/monsters-container.component";

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) => {
  console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
};

const App: React.FC = () => {
  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <MonstersContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;

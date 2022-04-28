import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";

import MonstersContainer from "./components/monsters-container/monsters-container.component";
import Modal from "./components/modal/modal.component";

const ErrorFallback = () => {
  return (
    <div className="error-fallback">
      <div role="alert">
        <p>Ooops something went wrong... Please try again later</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    console.log("myErrorHandler");
    console.log(info.componentStack);
    // Do something with the error
    // E.g. log to an error logging client here
  };

  const hideModalHandler = (_: React.MouseEvent<HTMLDivElement>) => {
    // dispatch(setIsModalOpen(false));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      {/* <Modal onClose={hideModalHandler}>Testing modal</Modal> */}

      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <MonstersContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;

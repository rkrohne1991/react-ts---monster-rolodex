import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";

import MonstersContainer from "./components/monsters-container/monsters-container.component";
import Modal from "./components/modal/modal.component";
import { useDispatch, useSelector } from "react-redux";

import { selectIsModalOpen, selectModalContent } from "./hooks/modal-selector";
import { setIsModalOpen, setModalContent } from "./store/action-creators";

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
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);
  const modalContent = useSelector(selectModalContent);

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
    dispatch(setIsModalOpen(true));
    dispatch(
      setModalContent(
        `${error}, please check component stack - ${info.componentStack}`
      )
    );
  };

  const hideModalHandler = (_: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      {isModalOpen && <Modal onClose={hideModalHandler}>{modalContent}</Modal>};
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <MonstersContainer />
      </ErrorBoundary>
    </div>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Hello World</h1>
          </>
        }
      ></Route>
    </Routes>
  );
};

export default App;

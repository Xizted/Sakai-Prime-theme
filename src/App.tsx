import { BrowserRouter } from 'react-router-dom';
import { LayoutProvider } from './layout/context/layoutcontext';
import Router from './router/Router';

const App = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Router />
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default App;

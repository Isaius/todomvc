import './App.css';
import Home from './ui/pages/Home';
import GlobalProviders from './ui/providers/GlobalProviders';

function App() {
  return (
    <GlobalProviders>
        <Home />
    </GlobalProviders>
  );
}

export default App;

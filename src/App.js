import React, { useState, useEffect} from 'react';
import './App.css';

//-> components imports
import Main from './components/Main';
import Loading from './components/Loading';

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <div className="App">
      {
        isLoading ? 
        <Loading />
        :
        <Main />
      }
    </div>
  );
}

export default App;

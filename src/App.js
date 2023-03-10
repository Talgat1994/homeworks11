import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Counter from './components/counter/Counter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); /// модальное окно

  // const [state, setState] = useState(0)

  // const add = () => {
  //   setState((prevState) => prevState + 1)
  // }

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('islogin') // в локал сторридж

    if (storedUserLoggedInfo === '1') {
      isLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
  
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('islogin')
  };

  return (
    <React.Fragment> {/*  Фрагменты позволяют группировать список дочерних элементов без добавления дополнительных узлов  */}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />} {/* this terms false working Login component  */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}  {/* if when terms true working this  */}
        {/* <button onClick={add}>add</button> */}
      </main>
      {/* <Counter/> */}
    </React.Fragment>
  );
}

export default App;



import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
 const [user,setUser] = useState("prince pandey"  );

  return (
    <div>
    <Provider store={appStore }>
    <UserContext.Provider value={{loggedUser:user,setUser}}>
      <Header/>    
      <Outlet/>
      </UserContext.Provider>
    </Provider>
    </div>
  );
}

export default App;



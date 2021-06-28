import { Provider } from "react-redux";
import React from 'react'
import store from "./src/redux/store";
import RootNavigation from "./src/navigation/rootNavigation";
const App =()=>{
return(
  <Provider store={store}>
    <RootNavigation/>
  </Provider>
)
}


export default App;

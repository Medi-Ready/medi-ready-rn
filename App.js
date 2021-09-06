import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import AppNavigator from "./src/navigators/AppNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;

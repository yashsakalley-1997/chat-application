import { Provider } from "react-redux";
import appStore from "./store/appStore";

import NewChat from "./components/NewChat/NewChat";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <NewChat/>
      </Provider>
    </div>
  );
}

export default App;

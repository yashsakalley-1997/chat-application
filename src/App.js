import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Routes from "./components/Routes/Routes";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;

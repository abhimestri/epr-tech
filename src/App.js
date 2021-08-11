import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "./store/actionCreators/index";
import UserLoginForm from "./components/loginUserForm";
import { Route, Switch, useHistory, Redirect } from "react-router";
import HomePage from "./components/homepage";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const fetchClientData = async () => {
      const client = history.location.pathname.toString().split("/")[3];
      try {
        const res = await axios.get(
          "https://sample-60722-default-rtdb.firebaseio.com/data.json"
        );
        const clientInfo = Object.entries(res.data).filter(
          (el) => el[1].client === client
        );
        dispatch(actionCreators.getClientInfo(clientInfo[0][0]));
      } catch (error) {
        dispatch(actionCreators.setError());
      }
    };
    fetchClientData();
  }, [dispatch, history]);

  return (
    <div className="App">
      <Switch>
        <Route path="/app/home" component={HomePage} />
        <Route path="/app/login/:id" component={UserLoginForm} />
        <Redirect to="/app/login/client1" />
      </Switch>
    </div>
  );
}

export default App;

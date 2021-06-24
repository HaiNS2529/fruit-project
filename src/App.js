import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./view/admin";
import AuthLayout from "./view/auth";
function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props}/>}></Route>
        <Route path="/auth" render={(props) => <AuthLayout {...props}/>}></Route>
        <Redirect from="/" to ="/auth/login"></Redirect>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

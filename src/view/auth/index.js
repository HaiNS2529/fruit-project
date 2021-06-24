import Login from "./login"
import ChangePass from "./changePass"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { defaultTo } from "lodash"
const routes=[
    {
        path:"/auth/login",
        name:"Login",
        component:Login,
        layout:"/auth",
    },
    {
        path:"/auth/changePass",
        name:"Đổi mật khẩu",
        component:ChangePass,
        layout:"/auth",
    },
]

const getRoutes = (routes) =>{
    return routes.map( (item,key) =>{
        {
            return (
                <Route
                exact
                path={item.path}
                component={item.component}
                key={key}
                />
            )
        }
    })
}
const Auth = (props) =>{
    return(
    <>
    <BrowserRouter>
        <Switch>
            {getRoutes(routes)}
            <Redirect form="*" to="/auth/login" />
        </Switch>
    </BrowserRouter>
    </>
    )
};
export default Auth;
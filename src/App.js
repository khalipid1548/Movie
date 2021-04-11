import BookVe from "components/BookVe";

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
// import AdminRoute from "./guards/AdminRoute";
// import AdminLayout from "./layouts/AdminLayout";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/index.jsx";
import Login from "./pages/Login";
import PhimDetail from "./pages/PhimDetail/index.jsx";
import Register from "./pages/Register";
// import UsersManagement from "./pages/UsersManagement";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/phim/:phimId"]}>
          <MainLayout>
            <Switch>
              <Route path="/phim/:phimId" component={PhimDetail} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </MainLayout>
        </Route>

        <Route exact path={["/login", "/register"]}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Route>

        <Route exact path="/chonghe" component={BookVe} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

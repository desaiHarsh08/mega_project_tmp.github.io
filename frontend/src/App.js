import { HomePage, LoginPage } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FarmersPage from "./pages/FarmersPage";
import { Accessories, AppliedSchemes, Cart, CustomersHome, FarmerLogin, FarmersCommercial, Footer, LoginHome, Schemes, UsersLogin } from "./components";
import Registration from "./components/Registration";
import CropInfo from "./components/CropInfo";
import Help from "./components/Help";
import CP from "./components/CP";



function App() {
  return (
    <div className="App">
      <Router>
        {/* {!(window.location.href.endsWith('/login')  || (window.location.href.endsWith('/login/users'))) ? <Navbar /> : ''} */}
        <Routes>
          <Route exact path={'/'} element={<HomePage />} />
          <Route exact path={'/login'} element={<LoginPage />} >
            <Route exact path={''} element={<LoginHome />} />
            <Route exact path={'farmer'} element={<FarmerLogin />} />
            <Route exact path={'user'} element={<UsersLogin />} />
          </Route>
          <Route exact path={'/register'} element={<Registration />} />
          <Route exact path={'/farmers'}  >

            {/* <Route exact path={''} element={
              <div className="mt-32">
                <div>
                  <h1 className="font-semibold text-3xl text-center ">Welcome To Farmer's Portal</h1>
                </div>
                <FeaturesHighlight />
                <FarmersTips />
                <div>
                  <Outlet />
                </div>
              </div>} /> */}
            <Route exact path={''} element={<FarmersPage />} />
            <Route exact path={'accessories'} element={<Accessories />} />
            <Route exact path={'commercial-products'} element={<FarmersCommercial />} />
            <Route exact path={'schemes'} element={<Schemes />} />
            <Route exact path={'applied-schemes'} element={<AppliedSchemes />} />
          </Route>
          <Route exact path={'crop-info'} element={<CropInfo />} />
          <Route exact path={'c_p'} element={<CP />} />
          <Route exact path={'help'} element={<Help />} />
          <Route exact path={'/users'} >
            <Route exact path={''} element={<CustomersHome />} />
            <Route exact path={'cart'} element={<Cart />} />
            {/* <Route exact path={'commercial-products'} element={<FarmersCommercial />} /> */}
          </Route>
        </Routes>
        {!(window.location.href.endsWith('/login') || (window.location.href.endsWith('/login/farmers')) || (window.location.href.endsWith('/login/users'))) ? <Footer /> : ''}
      </Router>
    </div >
  );
}

export default App;

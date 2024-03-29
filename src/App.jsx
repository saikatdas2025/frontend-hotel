import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Hotel from "./components/Hotel.jsx";
import AddHotel from "./components/AddHotel.jsx";
import { EditHotel } from "./components/EditHotel.jsx";
import { isUserLoggedIn } from "./apiRequest/User.js";

function Layout() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="sign-up" element={<Register />} />
      <Route path="sign-in" element={<Login />} />
      {isUserLoggedIn ? (
        <>
          <Route path="my-hotels" element={<Hotel />} />
          <Route path="my-hotels/edit-hotel/:id" element={<EditHotel />} />
          <Route path="add-hotel" element={<AddHotel />} />
        </>
      ) : (
        <Route path="" element={<Navigate to={"sign-in"} />} />
      )}
    </Route>
  )
);

export default App;

import { Routes, Route } from "react-router-dom";
import HomeComponents from "../components/Home/HomeComponents";
import AboutComponent from "../components/About/AboutComponent";
import DashboardComponent from "../components/Admin/DashboardComponent";
import AdminMiddleware from "../middleware/AdminMiddleware";
import UserListComponents from "../components/Admin/Users/UserListComponents";
import PageNotFoundComponents from "../components/Errors/PageNotFoundComponents";
function RouteComponents() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/about" element={<AboutComponent />} />
        {/* ============Admin Route============== */}
        <Route path="admin" element={<AdminMiddleware />}>
          <Route path="admin" element={<DashboardComponent />} />
          <Route path="users" element={<UserListComponents />} />
        </Route>
         <Route path="*" element={<PageNotFoundComponents />} />
      </Routes>
    </div>
  );
}
export default RouteComponents;
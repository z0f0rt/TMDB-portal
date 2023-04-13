import { Outlet } from "react-router-dom";
import { Head } from "../../components/Head/Head";

export function Layout() {
  return (
    <div className="App">
      <Head className="header" />
      <Outlet />
    </div>
  );
}

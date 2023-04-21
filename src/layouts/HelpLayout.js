import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Help Page</h2>
      <p>This is a help page</p>

      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="contact">Contact</NavLink>

      <Outlet />
    </div>
  );
}

export default HelpLayout;

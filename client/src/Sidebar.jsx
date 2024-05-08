import { Link } from "react-router-dom";
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Metan</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/home">
          <li className="sidebar-list-item">
            <Link to="/home">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </Link>
          </li>
        </Link>
        <Link to="/home/requests">
          <li className="sidebar-list-item">
            <Link to="/home/requests">
              <BsFillArchiveFill className="icon" /> Requests
            </Link>
          </li>
        </Link>

        <Link to="/home/accounts">
          <li className="sidebar-list-item">
            <Link to="/home/accounts">
              <BsPeopleFill className="icon" /> Accounts
            </Link>
          </li>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;

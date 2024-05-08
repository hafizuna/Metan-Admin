import API from "./API";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

function Dashboard() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Requests</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Alerts</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>0</h1>
        </div>
      </div>

      <div className="requests">
        <API />
      </div>
    </main>
  );
}

export default Dashboard;

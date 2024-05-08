import React, { useState, useEffect } from "react";
import { BsCheck2All } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

function RequestTable() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/home");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAcceptRequest = (id) => {
    // Implement accept request logic here
    console.log(`Accept request with ID ${id}`);
  };

  return (
    <div>
      <h2>List of Requests</h2>
      <table className="request-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Location</th>
            <th>Service Type</th>
            <th>Plate No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.phone}</td>
              <td>{request.inputValue}</td>
              <td>{request.service}</td>
              <td>{request.plate}</td>
              <td className="action">
                <div onClick={() => handleAcceptRequest(request.id)}>
                  <BsCheck2All />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;

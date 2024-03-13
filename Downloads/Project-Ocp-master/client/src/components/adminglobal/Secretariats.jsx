import React, { useState, useEffect } from 'react';

function Secretariats() {
  const [allSecretariats, setAllSecretariats] = useState(() => {
    const savedSecretariats = localStorage.getItem('allSecretariats');
    return savedSecretariats ? JSON.parse(savedSecretariats) : [];
  });

  const [latestSecretariat, setLatestSecretariat] = useState(() => {
    const latestSecretariatData = localStorage.getItem('latestSecretariat');
    return latestSecretariatData ? JSON.parse(latestSecretariatData) : null;
  });

  useEffect(() => {
    localStorage.setItem('allSecretariats', JSON.stringify(allSecretariats));
    localStorage.setItem('latestSecretariat', JSON.stringify(latestSecretariat));
  }, [allSecretariats, latestSecretariat]);

  const deleteSecretariat = (id) => {
    const updatedSecretariats = allSecretariats.filter(secretariat => secretariat.id !== id);
    setAllSecretariats(updatedSecretariats);
    // Update the corresponding employe if the secretariat's role is 'secretariat'
    const updatedEmployes = employes.filter(employe => employe.id !== id);
    setEmployes(updatedEmployes);
  };

  return (
    <div>
      <h1>Welcome to page Secretariats</h1>
      <h2>All Secretariats</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Role</th>
            <th>Service</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allSecretariats.map((secretariat) => (
            <tr key={secretariat.id}>
              <td>{secretariat.id}</td>
              <td>{secretariat.full_name}</td>
              <td>{secretariat.address}</td>
              <td>{secretariat.phone}</td>
              <td>{secretariat.start_date}</td>
              <td>{secretariat.end_date}</td>
              <td>{secretariat.role}</td>
              <td>{secretariat.service}</td>
              <td>{secretariat.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Secretariats;

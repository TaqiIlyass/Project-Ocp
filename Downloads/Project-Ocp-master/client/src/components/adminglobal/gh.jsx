import React, { useState, useEffect } from 'react';
import './Employe.css';

function Employe() {
  const [employes, setEmployes] = useState(() => {
    const savedEmployes = localStorage.getItem('employes');
    return savedEmployes ? JSON.parse(savedEmployes) : [];
  });

  useEffect(() => {
    localStorage.setItem('employes', JSON.stringify(employes));
  }, [employes]);

  const [formData, setFormData] = useState({ id: 1, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' });

  const addOrUpdateEmploye = () => {
    const newEmploye = { ...formData };
    if (formData.id === null) {
      newEmploye.id = employes.length + 1;
      setEmployes([...employes, newEmploye]);
    } else {
      const updatedEmployes = employes.map((employe) => (employe.id === formData.id ? formData : employe));
      setEmployes(updatedEmployes);
    }
    setFormData({ id: null, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' });
  };

  const loadEmployeForUpdate = (employe) => {
    setFormData(employe);
  };

  const deleteEmploye = (id) => {
    const updatedEmployes = employes.filter((employe) => employe.id !== id);
    setEmployes(updatedEmployes);
  };

  return (
    <div>
      <h1>Employés</h1>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employes.map((employe) => (
            <tr key={employe.id}>
              <td>{employe.id}</td>
              <td>{employe.full_name}</td>
              <td>{employe.address}</td>
              <td>{employe.phone}</td>
              <td>{employe.start_date}</td>
              <td>{employe.end_date}</td>
              <td>{employe.role}</td>
              <td>{employe.service}</td>
              <td>{employe.email}</td>
              <td>
                <button onClick={() => deleteEmploye(employe.id)}>Supprimer</button>
                <button onClick={() => loadEmployeForUpdate(employe)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{formData.id !== null ? 'Modifier un employé' : 'Ajouter un nouvel employé'}</h2>
      <input
        type="text"
        value={formData.full_name}
        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
        placeholder="Full Name"
      />
      <input
        type="text"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        placeholder="Address"
      />
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone"
      />
      <input
        type="text"
        value={formData.start_date}
        onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
        placeholder="Start Date"
      />
      <input
        type="text"
        value={formData.end_date}
        onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
        placeholder="End Date"
      />
      <input
        type="text"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        placeholder="Role"
      />
      <input
        type="text"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        placeholder="Service"
      />
      <input
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={addOrUpdateEmploye}>{formData.id !== null ? 'Modifier' : 'Ajouter'}</button>
    </div>
  );
}

export default Employe;

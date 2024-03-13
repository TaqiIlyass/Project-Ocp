import React, { useState, useEffect } from 'react';
import './Employe.css';

function Employe() {
  const [employes, setEmployes] = useState(() => {
    const savedEmployes = localStorage.getItem('employes');
    return savedEmployes ? JSON.parse(savedEmployes) : [];
  });

  const [allSecretariats, setAllSecretariats] = useState(() => {
    const savedSecretariats = localStorage.getItem('allSecretariats');
    return savedSecretariats ? JSON.parse(savedSecretariats) : [];
  });

  const [formData, setFormData] = useState({ id: null, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' });

  const addOrUpdateEmploye = () => {
    const newEmploye = { ...formData };
    if (newEmploye.id === null) {
      newEmploye.id = employes.length + 1;
      setEmployes([...employes, newEmploye]);
    } else {
      const updatedEmployes = employes.map((employe) => (employe.id === formData.id ? formData : employe));
      setEmployes(updatedEmployes);
      
      // Update the corresponding secretariat if it exists in the list
      const existingIndex = allSecretariats.findIndex(item => item.id === formData.id);
      if (existingIndex !== -1) {
        const updatedSecretariats = [...allSecretariats];
        updatedSecretariats[existingIndex] = formData;
        setAllSecretariats(updatedSecretariats);
      }
    }

    if (newEmploye.role.toLowerCase() === 'secretariat') {
      const existingIndex = allSecretariats.findIndex(item => item.id === newEmploye.id);
      if (existingIndex === -1) {
        setAllSecretariats([...allSecretariats, newEmploye]);
      }
      localStorage.setItem('latestSecretariat', JSON.stringify(newEmploye));
    }

    setFormData({ id: null, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' });
  };

  const deleteEmploye = (id) => {
    const updatedEmployes = employes.filter((employe) => employe.id !== id);
    setEmployes(updatedEmployes);
    setAllSecretariats(allSecretariats.filter((secretariat) => secretariat.id !== id));
  };

  const loadEmployeForUpdate = (employe) => {
    setFormData(employe);
  };

  useEffect(() => {
    localStorage.setItem('employes', JSON.stringify(employes));
    localStorage.setItem('allSecretariats', JSON.stringify(allSecretariats));
  }, [employes, allSecretariats]);

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
      <br></br>

       <input
        type="text"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        placeholder="Address"
      />
      <br></br>

     <input
  type="number"
  value={formData.phone}
  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
  placeholder="Phone"
/>
<br></br>
<input
  type="date"
  value={formData.start_date}
  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
  placeholder="Start Date"
/>
<br></br>

<input
  type="date"
  value={formData.end_date}
  onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
  placeholder="End Date"
/>
<br></br>

      <input
        type="text"
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        placeholder="Role"
      />
      <br></br>

      <input
        type="text"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        placeholder="Service"
      />
      <br></br>

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

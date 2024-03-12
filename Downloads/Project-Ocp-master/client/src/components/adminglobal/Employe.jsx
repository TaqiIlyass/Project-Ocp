import React, { useState, useEffect } from 'react';
import './Employe.css';

function Employe() {
  // État local pour stocker la liste des employés
  const [employes, setEmployes] = useState(() => {
    // Récupérer les données depuis localStorage s'ils existent, sinon retourner une liste vide
    const savedEmployes = localStorage.getItem('employes');
    return savedEmployes ? JSON.parse(savedEmployes) : [];
  });

  // Effet pour sauvegarder les employés dans localStorage chaque fois qu'ils changent
  useEffect(() => {
    localStorage.setItem('employes', JSON.stringify(employes));
  }, [employes]);

  // État local pour gérer le formulaire d'ajout ou de mise à jour d'employé
  const [formData, setFormData] = useState({ id: null, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' });

  // Fonction pour ajouter ou mettre à jour un employé
  const addOrUpdateEmploye = () => {
    if (formData.id !== null) {
      // Mise à jour de l'employé existant
      const updatedEmployes = employes.map(employe => employe.id === formData.id ? formData : employe);
      setEmployes(updatedEmployes);
    } else {
      // Ajout d'un nouvel employé
      setEmployes([...employes, { id: employes.length + 1, ...formData }]);
    }
    setFormData({ id: null, full_name: '', address: '', phone: '', start_date: '', end_date: '', role: '', service: '', email: '' }); // Réinitialiser le formulaire
  };

  // Fonction pour charger les informations de l'employé sélectionné dans le formulaire pour la mise à jour
  const loadEmployeForUpdate = (employe) => {
    setFormData(employe);
  };

  // Fonction pour supprimer un employé
  const deleteEmploye = (id) => {
    setEmployes(employes.filter((employe) => employe.id !== id));
  };

  return (
    <div>
      <h1>Employés</h1>
      {/* Afficher la liste des employés */}
      <table>
        <thead>
          <tr>
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

      {/* Formulaire pour ajouter ou mettre à jour un employé */}
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

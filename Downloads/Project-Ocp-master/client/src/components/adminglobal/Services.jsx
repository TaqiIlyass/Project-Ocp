import React, { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem('services');
    return savedServices ? JSON.parse(savedServices) : [
      
    ];
  });

  const [formData, setFormData] = useState({ id: null, name: '', sigle: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  const addService = () => {
    setServices([...services, { ...formData, id: services.length + 1 }]);
    setFormData({ id: null, name: '', sigle: '' });
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const editService = (id) => {
    const serviceToEdit = services.find(service => service.id === id);
    setFormData(serviceToEdit);
    setIsEditing(true);
  };

  const updateService = () => {
    setServices(services.map(service => (service.id === formData.id ? formData : service)));
    setFormData({ id: null, name: '', sigle: '' });
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Welcome to the Services page</h1>
      <h2>{isEditing ? 'Edit Service' : 'Add Service'}</h2>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Service Name"
      />
      <input
        type="text"
        value={formData.sigle}
        onChange={(e) => setFormData({ ...formData, sigle: e.target.value })}
        placeholder="Service Sigle"
      />
      <button onClick={isEditing ? updateService : addService}>{isEditing ? 'Update' : 'Add'}</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sigle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.sigle}</td>
              <td>
                <button onClick={() => editService(service.id)}>Edit</button>
                <button onClick={() => deleteService(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;

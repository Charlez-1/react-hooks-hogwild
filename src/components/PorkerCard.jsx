import React, { useState } from "react";

function PorkerCard({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    highest_medal_achieved: "",
    image: "" 
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create 
    const newHog = {
      ...formData,
      id: Date.now(), 
      weight: Number(formData.weight) 
    };

    // Passing component
    onAddHog(newHog);

    // Reset Card
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      highest_medal_achieved: "",
      image: ""
    });

    setShowForm(false);
  };

  return (
    <div className="ui segment">
      <button 
        className="ui button primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Hide Form" : "Add New Hog"}
      </button>

      {showForm && (
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Specialty:</label>
            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Weight (in pounds):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Highest Medal Achieved:</label>
            <input
              type="text"
              name="highest_medal_achieved"
              value={formData.highest_medal_achieved}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Image URL:</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="greased"
                checked={formData.greased}
                onChange={handleChange}
              />
              <label>Greased</label>
            </div>
          </div>

          <button className="ui button positive" type="submit">
            Add Hog
          </button>
        </form>
      )}
    </div>
  );
}

export default PorkerCard;
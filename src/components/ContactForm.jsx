import { useState } from "react";
import "../assets/css/ContactForm.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const fieldname = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldname]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("The data is posted successfully");
        setFormData({
          firstname: "",
          email: "",
          phonenumber: "",
          message: "",
        });
      } else {
        console.error("Error sending to the API");
      }
    } catch (error) {
      console.error("Error sending form data", error);
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={5} // Specify the number of visible rows
            // Specify the number of visible columns
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

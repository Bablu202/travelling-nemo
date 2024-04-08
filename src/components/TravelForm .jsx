import { faqs } from "@/constants";
import { useState } from "react";

const TravelForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    name: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      email: "",
      mobileNumber: "",
      name: "",
      dob: "",
    });
  };

  return (
    <section className="px-5 flex flex-col lg:flex-row" id="contact">
      <div className="container max-w-md mx-atuo  lg:mr-auto mb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Travel Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block mb-2">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-500"
          >
            Submit
          </button>
        </form>
      </div>
      {/* faqs */}
      <div className="flex flex-row" id="faqs">
        <div
          className="container -ml-8 lg:mx-auto px-4 py-8 overflow-y-auto "
          style={{ maxHeight: "80vh" }}
        >
          <h3 className="text-xl font-semibold mb-2">
            Frequently asked questions..
          </h3>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-lg p-6 mb-4"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <a
          className="bg-yellow-500 w-10 lg:hidden rounded-3xl"
          href="#review"
        />
      </div>
    </section>
  );
};

export default TravelForm;

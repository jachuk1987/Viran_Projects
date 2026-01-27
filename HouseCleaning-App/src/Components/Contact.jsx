import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("All fields are required");
      return;
    }
    alert("Booking request submitted!");
    setError("");
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Book a Service</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          className="w-full p-3 border"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <input
          className="w-full p-3 border"
          placeholder="Phone"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-blue-600 text-white w-full py-3">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

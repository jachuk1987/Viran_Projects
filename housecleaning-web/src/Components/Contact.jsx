const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full p-3 border" placeholder="Name" />
        <input className="w-full p-3 border" placeholder="Phone" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded w-full">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

const Contact = () => (
  <section className="py-16 text-center">
    <h2 className="text-3xl font-bold mb-6">Book a Service</h2>
    <form className="max-w-md mx-auto space-y-4">
      <input className="w-full p-3 border" placeholder="Name" />
      <input className="w-full p-3 border" placeholder="Phone" />
      <button className="bg-blue-600 text-white w-full py-3">
        Submit
      </button>
    </form>
  </section>
);

export default Contact;

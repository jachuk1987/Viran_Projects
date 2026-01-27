const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      <a
        href="tel:9999999999"
        className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        Call Now
      </a>
    </div>
  );
};

export default FloatingCTA;

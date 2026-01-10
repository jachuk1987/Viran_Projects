const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

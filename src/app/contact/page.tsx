const Contact: React.FC = () => {

  const email = "sivarajyukash@gmail.com"
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-8">Feel free to reach out at {email}</p>
        <form className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

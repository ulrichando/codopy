const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-black p-2 m-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-black p-2 m-2"
        />
        <textarea
          placeholder="Message"
          className="border-2 border-black p-2 m-2"
        />
        <button className="border-2 border-black p-2 m-2">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

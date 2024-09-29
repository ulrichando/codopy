import React, { useState } from "react";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import SendButton from "../ui/SendButton";

const HorizontalImageBoxWithForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const images = [
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
    "/api/placeholder/300/200",
  ];

  return (
    <div className="max-w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-md overflow-x-auto">
      <div className="flex space-x-4 min-w-max">
        {images.map((src, index) => (
          <div key={index} className="w-72 flex-shrink-0">
            <img
              src={src}
              alt={`Placeholder ${index + 1}`}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
        <div className="w-72 flex-shrink-0 bg-white p-4 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <SendButton type="submit" loading={loading}>
              Send
            </SendButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HorizontalImageBoxWithForm;

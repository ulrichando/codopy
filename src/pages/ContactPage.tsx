import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("An error occurred");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-#ffffff-50">
      {/* Get In Touch Section - Absolutely positioned */}
      <div className="absolute top-20 left-20 z-10">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900">
          Get In Touch.
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Send your feedback
          <br />
          ulrichando007@gmail.com
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left side - SVG Illustration */}
              <div className="lg:w-1/2 p-8 flex justify-center">
                <svg
                  viewBox="0 0 800 600"
                  className="w-full max-w-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Elements */}
                  <g fill="#000000">
                    <circle cx="700" cy="100" r="50" opacity="0.1" />
                    <circle cx="100" cy="500" r="30" opacity="0.1" />
                  </g>

                  {/* Desk and Person */}
                  <g transform="translate(200, 150)">
                    {/* Monitor */}
                    <rect
                      x="50"
                      y="50"
                      width="300"
                      height="200"
                      rx="10"
                      fill="#000000"
                    />
                    <rect
                      x="60"
                      y="60"
                      width="280"
                      height="180"
                      rx="5"
                      fill="white"
                    />

                    {/* Screen Content */}
                    <g transform="translate(80, 80)">
                      <rect
                        width="240"
                        height="20"
                        rx="4"
                        fill="#000000"
                        opacity="0.1"
                      />
                      <rect
                        y="40"
                        width="240"
                        height="20"
                        rx="4"
                        fill="#000000"
                        opacity="0.1"
                      />
                      <rect
                        y="80"
                        width="240"
                        height="20"
                        rx="4"
                        fill="#000000"
                        opacity="0.1"
                      />
                      {/* Checkboxes */}
                      <rect
                        x="10"
                        y="10"
                        width="15"
                        height="15"
                        rx="2"
                        fill="#000000"
                      />
                      <path
                        d="M13 17 l2 2 l5 -5"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                      />
                    </g>

                    {/* Monitor Stand */}
                    <path d="M175 250 h50 v30 h-50 z" fill="#000000" />
                    <path d="M150 280 h100 v10 h-100 z" fill="#000000" />

                    {/* Globe */}
                    <g transform="translate(0, 100)">
                      <circle
                        cx="30"
                        cy="30"
                        r="30"
                        fill="#000000"
                        opacity="0.8"
                      />
                      <path
                        d="M10 30 Q30 0 50 30 Q30 60 10 30"
                        fill="#000000"
                      />
                      <path
                        d="M15 15 Q30 30 45 15 M15 45 Q30 30 45 45"
                        stroke="#000000"
                        fill="none"
                        strokeWidth="2"
                      />
                    </g>

                    {/* Books */}
                    <g transform="translate(380, 120)">
                      <rect width="40" height="80" rx="4" fill="#000000" />
                      <rect
                        x="5"
                        y="10"
                        width="30"
                        height="5"
                        fill="white"
                        opacity="0.5"
                      />
                    </g>

                    {/* Pencil Holder */}
                    <g transform="translate(350, 100)">
                      <rect
                        width="20"
                        height="40"
                        rx="4"
                        fill="#000000"
                        opacity="0.8"
                      />
                      {/* Pencils */}
                      <line
                        x1="5"
                        y1="5"
                        x2="5"
                        y2="35"
                        stroke="#000000"
                        strokeWidth="2"
                      />
                      <line
                        x1="10"
                        y1="3"
                        x2="10"
                        y2="33"
                        stroke="#000000"
                        strokeWidth="2"
                      />
                      <line
                        x1="15"
                        y1="7"
                        x2="15"
                        y2="37"
                        stroke="#000000"
                        strokeWidth="2"
                      />
                    </g>

                    {/* Person */}
                    <g transform="translate(175, 150)">
                      {/* Body */}
                      <path d="M0 100 Q50 50 100 100" fill="#000000" />
                      {/* Head */}
                      <circle cx="50" cy="50" r="30" fill="#000000" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Right side - Form */}
              <div className="lg:w-1/2 p-8">
                <div className="max-w-md mx-auto">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      ) : (
                        <>
                          <span>Send</span>
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

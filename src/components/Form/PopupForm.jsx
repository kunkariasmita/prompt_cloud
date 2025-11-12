import { useState } from "react";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Button to open the popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Open Form
      </button>

      {/* Overlay (background) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          {/* Modal */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {/* Form content */}
            <h2 className="text-xl font-semibold mb-4 text-center">Contact Form</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg py-2 mt-2 hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

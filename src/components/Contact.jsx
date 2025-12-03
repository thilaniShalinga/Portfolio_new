import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

export default function Contact({ darkMode }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const[name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("form data: ", form.current);

    const service_id = "service_1r7rt1f";
    const template_id = "template_gcvl9r5";
    const public_key = "_Z7sJZRHvDgKPDy2G";

    const templateParams =  {
      name : name,
      email : email,
      to_name : 'Athilani',
      message : message, 
    };

    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then((response) => {
        console.log("email sent successfully", response);
        alert("Message sent successfully!");
        setLoading(false);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className={`py-20 px-6 pt-32 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <div
          className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Contact Me
        </div>
        <p className="text-gray-500 dark:text-gray-300 mb-10">
          Feel free to reach out for collaborations, projects, or just to say
          hi!
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              required
              className={`p-4 rounded-2xl border-2 ${
                darkMode
                  ? "border-white/10 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-300"
              } focus:outline-none focus:ring-2 transition shadow-md hover:-translate-y-1 hover:shadow-[0_0_12px_#38BDF8]`}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              required
              className={`p-4 rounded-2xl border-2 ${
                darkMode
                  ? "border-white/10 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-300"
              } focus:outline-none focus:ring-2 transition shadow-md hover:-translate-y-1 hover:shadow-[0_0_12px_#38BDF8]`}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              required
              rows="6"
              className={`p-4 rounded-2xl border-2 ${
                darkMode
                  ? "border-white/10 bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-blue-300"
              } focus:outline-none focus:ring-2 transition shadow-md hover:-translate-y-1 hover:shadow-[0_0_12px_#38BDF8] resize-none`}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div
            className={`p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-3xl font-bold mb-6">Reach Me</h3>

            <div className="space-y-8 text-lg">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail
                  size={32}
                  className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
                />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:athilanishalinga@gmail.com"
                    className="text-blue-500 underline"
                  >
                    athilanishalinga@gmail.com
                  </a>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-start gap-4">
                <Phone
                  size={32}
                  className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}
                />
                <div>
                  <p className="font-semibold">Mobile</p>
                  <a
                    href="tel:+94761234567"
                    className="text-blue-500 underline"
                  >
                    +94 76 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

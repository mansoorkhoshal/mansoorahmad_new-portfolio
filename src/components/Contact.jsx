import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      icon: FaEnvelope,
      head: "Email",
      subHead: "mansoorahmad.dev44@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      head: "Phone",
      subHead: "+92 323 4466448",
    },
    {
      icon: FaMapMarkerAlt,
      head: "Address",
      subHead: "Lahore, Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm text-emerald-600 font-medium">Contact</h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Get in touch
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Whether you have a project idea or just want to say hello — drop a
            message and I'll reply.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-lg bg-emerald-100 text-emerald-600">
                  <item.icon className="text-xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.head}
                  </h4>
                  <p className="text-sm text-gray-600 break-words">
                    {item.subHead}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send a message
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500 transition"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Your email</span>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500 transition"
                  />
                </label>
              </div>

              <label className="block">
                <span className="sr-only">Your message</span>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-500 transition resize-none"
                ></textarea>
              </label>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-lg shadow hover:bg-emerald-700 transform hover:-translate-y-0.5 transition"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500">
                  Typical response time: 1-2 business days
                </p>
              </div>
            </form>
          </div>
          <aside className="bg-emerald-100 rounded-2xl p-6 text-gray-700 shadow-inner">
            <h4 className="font-semibold mb-2">Need a fast reply?</h4>
            <p className="text-sm mb-4">
              For urgent work, put “Urgent” in the subject or message and I'll
              prioritize.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:mansoorahmad.dev44@gmail.com"
                className="text-sm inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-white/90 transition"
              >
                Email me
              </a>
              <a
                href="#portfolio"
                className="text-sm inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-emerald-200 hover:bg-white transition"
              >
                See my CV
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

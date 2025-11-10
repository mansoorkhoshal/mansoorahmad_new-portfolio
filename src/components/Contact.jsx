import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      icon: FaEnvelope,
      head: "Email",
      subHead: "mansoorahmad.dev44@gmail.com",
      link: "mailto:mansoorahmad.dev44@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      head: "Phone",
      subHead: "+92 323 4466448",
      // WhatsApp direct link (remove spaces in number)
      link: "https://wa.me/923234466448",
    },
    {
      icon: FaMapMarkerAlt,
      head: "Address",
      subHead: "Lahore, Pakistan",
      // Google Maps link
      link: "https://www.google.com/maps?q=Lahore,+Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
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

        {/* clickable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition transform hover:-translate-y-1 hover:bg-emerald-100 cursor-pointer block"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 rounded-lg bg-emerald-200 text-emerald-700">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

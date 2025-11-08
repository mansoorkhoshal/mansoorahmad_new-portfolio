import testimoinals1 from "../assets/testimoinal1.jpg";
import testimoinals2 from "../assets/testimoinal2.png";
import testimoinals3 from "../assets/testimoinal3.jpg";

const reviews = [
  {
    testimoinalImage: testimoinals1,
    name: "Muhammad Ullah",
    role: "Full Stack Developer",
    text: "Mansoor delivered a clean, fast landing page. Very responsive to feedback and professional throughout.",
  },
  {
    testimoinalImage: testimoinals2,
    name: "Talha Waleed",
    role: "Frontend Developer",
    text: "Great work - the app is performant and mobile-friendly. Communication was excellent.",
  },
  {
    testimoinalImage: testimoinals3,
    name: "Yousaf Ibrahim",
    role: "Designer",
    text: "Loved the attention to detail. The UI felt polished and accessible on first release.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-sm text-emerald-600 font-medium">Trusted by</h3>
          <h2 className="text-3xl font-extrabold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Real feedback from people I worked with. Short, honest, and to the
            point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={r.testimoinalImage}
                  alt={r.name}
                  className="w-20 h-20 rounded-full object-cover border border-emerald-100"
                />
                <div>
                  <p className="font-semibold text-gray-800">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">“{r.text}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

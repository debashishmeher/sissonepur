import "./Home.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaChalkboardTeacher, FaChartLine } from "react-icons/fa";
import Card from "../components/Card"

const heroCard = [
  {
    heading: "CBSE Curriculum Excellence",
    para: "Sukanti International School offers comprehensive CBSE education programs designed to foster academic excellence and holistic student development.",
    icon: <GiGraduateCap className="card-icon" />,
  },
  {
    heading: "Experienced Faculty Team",
    para: "Our dedicated teachers provide expert guidance, ensuring personalized mentorship and quality education for student success.",
    icon: <FaChalkboardTeacher className="card-icon" />,
  },
  {
    heading: "Modern Learning Facilities",
    para: "Sukanti International School features state-of-the-art infrastructure and facilities to support innovative teaching and learning experiences.",
    icon: <FaChartLine className="card-icon" />,
  },
];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-main">
        <span className="heading-before">Welcome to Sukanti International</span>
        <h1 className="heading">Nurturing Excellence Through Quality Education</h1>
        <p className="para">
          Located in Sonepur, Odisha, Sukanti International School provides premium CBSE education 
          with modern facilities, experienced faculty, and a nurturing environment that inspires 
          young minds to achieve their fullest potential. We are committed to shaping future leaders 
          through holistic development and academic excellence.
        </p>
        <div className="btn-container flex gap-4">
          <button className="px-5 py-2 uppercase tracking-wide font-semibold rounded-full text-white border-none shadow-sm transition-transform duration-200 bg-gradient-to-br from-[var(--buttons-color)] to-[var(--buttons-color)] hover:scale-x-110">
            Explore Programs
          </button>
          <button className="px-5 py-2 uppercase tracking-wide font-semibold rounded-full text-white border-none shadow-sm transition-transform duration-200 bg-gradient-to-br from-[var(--buttons-color)] to-[var(--buttons-color)] hover:scale-x-110">
             Visit
          </button>
        </div>
      </div>
      <div className="card-container">
        {heroCard.map((card, index) => (
          <Card
            key={index}
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "rgba(135, 206, 250, 0.4)"
                  : "rgba(105, 90, 205, 0.4)",
            }}
            heading={card.heading}
            para={card.para}
          >
            {card.icon}
          </Card>
        ))}
      </div>
    </section>
  );
}
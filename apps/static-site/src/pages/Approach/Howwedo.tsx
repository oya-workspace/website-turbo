
import './approach.css';

interface ArticleCard {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function PhysicalAndEmotional() {
  const articleCards: ArticleCard[] = [
    {
      title: "Scan & Assess",
      description: "Start with a personalized analysis - through advanced scans, bloodwork, or specialized tests, self-guided or with a practitioner. This baseline becomes your blueprint for precise, targeted progress.",
      image: "/assets/img/approach/scan.jpg"
    },
    {
      title: "Decode Your Blueprint",
      description: "We translate your physical and emotional data into a visual dashboard that highlights imbalances and guides your next steps. As you evolve, so does your blueprint and your action plan.",
      image: "/assets/img/approach/decode.png"
    },
    {
      title: "Start Healing",
      description: "Follow your personalized plan with tailored detox, emotional clarity, and customized supplements. Then return to step one because healing is a loop, and your journey evolves with you.",
      image: "/assets/img/approach/healing.jpg"
    }
  ];

  return (
    <section className="physical-emotional-section" id="how-we-do-sections">

      {/* Article Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="how-we-do-title text-white">How We Do It</h1>
        <p className="how-we-do-description text-white opacity-70 text-center">Three simple steps to unlock your personalized path to health and longevity - then revisit, refine, and evolve. This is a living journey, guided by your data and led by you.</p>
        <div className="principles-grid">
          {articleCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#F8F8F8] rounded-xl overflow-hidden border-1 border-[#E9A15E]"
            >
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-[24px] font-weight-400 text-[#2B2B2B] mb-3 h-10 ff-newsreader">
                  {card.title}
                </h4>
                <p className="text-[16px] font-weight-300 text-[#2B2B2B] leading-relaxed mb-4 ">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


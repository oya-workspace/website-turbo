import React, { useState } from "react";
import { Link } from "react-router-dom";

type TabId = "body" | "mind";

interface TabData {
  id: TabId;
  label: string;
  icon: string;
  iconAlt: string;
  heading: string;
  paragraphs: (string | { text: string; style?: React.CSSProperties })[];
}

const TABS_DATA: TabData[] = [
  {
    id: "body",
    label: "BODY",
    icon: "/assets/img/Icon1.svg",
    iconAlt: "Body icon",
    heading: "What if healing meant seeing the whole picture at the root?",
    paragraphs: [
      "We combine measurable biomarkers with real-time frequency mapping to reveal a truly complete view of your health. Across seven core systems we decode patterns, disruptions, and hidden imbalances.",
      {
        text: "Biomarkers show what's happening on a chemical level. Frequency mapping shows how is the body  adapting, where stress is held, and how is the nervous system responding. One gives the data; the other gives  the context.",
        style: { paddingBottom: "2rem" },
      },
    ],
  },
  {
    id: "mind",
    label: "MIND",
    icon: "/assets/img/Icon.svg",
    iconAlt: "Mind icon",
    heading: "Which came first: your symptoms or your stress?",
    paragraphs: [
      "We've treated emotions like background noise, but they're often the first signal something's off.",
      "Your biology and emotions aren't separate. Your health issues are emotional. Your emotions are biological.",
      {
        text: "We treat neuro-somatic signals with the same weight as lab results.",
        style: { paddingBottom: "2rem" },
      },
    ],
  },
];

const SciencePageLink = () => (
  <Link
    to="/approach"
    className="get-started-btn black"
    onClick={() => window.scrollTo(0, 0)}
  >
    See the Science Page{" "}
    <img src="/assets/img/partner/line-arrow-right.svg" alt="" />
  </Link>
);

const TabButton = ({
  tab,
  isActive,
  onClick,
}: {
  tab: TabData;
  isActive: boolean;
  onClick: () => void;
}) => (
  <h4 className={isActive ? "active" : ""} onClick={onClick}>
    <img src={tab.icon} alt={tab.iconAlt} />
    {tab.label}
  </h4>
);

const TabContent = ({ tab }: { tab: TabData }) => (
  <>
    <h2 className="tabs-heading">{tab.heading}</h2>
    {tab.paragraphs.map((para, index) => {
      const content = typeof para === "string" ? para : para.text;
      const style = typeof para === "string" ? undefined : para.style;

      return (
        <p key={index} style={style}>
          {content}
        </p>
      );
    })}
    <SciencePageLink />
  </>
);

const VideoSection = () => (
  <div className="col-12 col-lg-6" data-aos="fade-left">
    <video
      className="video-set"
      width="320"
      height="240"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/assets/img/videos.mp4" type="video/mp4" />
      <source src="/assets/img/videos.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabId>("body");
  const activeTabData = TABS_DATA.find((tab) => tab.id === activeTab)!;

  return (
    <section className="tabs-with-full">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div
            className="col-12 col-lg-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            data-aos="fade-right"
          >
            <div className="tab-bk">
              {/* Tabs */}
              <div className="menuss">
                {TABS_DATA.map((tab) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>

              {/* Content */}
              <TabContent tab={activeTabData} />
            </div>
          </div>

          {/* Right Column */}
          <VideoSection />
        </div>
      </div>
    </section>
  );
}

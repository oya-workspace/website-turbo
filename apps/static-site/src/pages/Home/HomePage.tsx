import Banner from "../../Components/Banner";
import Everything from "../../Components/Everything";
import BodyMenus from "../../Components/BodyMenus";
import Understand from "../../Components/Understand";
import Counter from "../../Components/Counter";
import Tabs from "../../Components/Tabs";
import Stats from "../../Components/Stats";
import Phases from "../../Components/Phases";
import Journey from "../../Components/Journey";
import Portal from "../../Components/Portal";
import Testimonals from "../../Components/Testimonals";
import FAQ from "../../Components/FAQ";
// import Start from "../../Components/Start";
import WhyOya from "../../Components/WhyOya";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Everything />
      <BodyMenus />
      <Counter />
      <Tabs />
      <Understand />
      <Stats />
      <Phases />
      {/* <Journey /> */}
      <WhyOya />
      {/* <Portal /> */}
      <Testimonals />
      <FAQ />
    </>
  );
}

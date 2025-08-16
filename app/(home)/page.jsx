import InterestSection from "./components/InterestSection";
import LightDealsSection from "./components/LightDealsSection";

const HomePage = () => {
  return (
    <main className="home-page">
      <LightDealsSection />
      <InterestSection />
    </main>
  );
};

export default HomePage;

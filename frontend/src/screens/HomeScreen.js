import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Collection from '../components/Collection';
import Informative from '../components/Informative';
import PromiseComponent from '../components/PromiseComponent';
import Upcoming from '../components/Upcoming';

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <Upcoming />
      <Collection />
      <Informative />
      <PromiseComponent />
    </div>
  );
};

export default HomeScreen;

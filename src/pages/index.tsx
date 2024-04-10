import Accomplishments from '../components/Accomplishment/Accomplishment';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Lab from '../components/Lab/Lab';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/Timeline/Timeline';
import { Layout } from '../layout/Layout'; 
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid="true">
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <Lab />
    </Layout>
  );
};

export default Home;
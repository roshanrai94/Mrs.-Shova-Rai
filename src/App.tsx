/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Ventures from './components/Ventures';
import Impact from './components/Impact';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Milestones from './components/Milestones';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-soft-beige">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Ventures />
      <Impact />
      <Awards />
      <Gallery />
      <Milestones />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

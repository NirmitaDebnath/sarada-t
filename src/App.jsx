import Navbar from './components/Navbar';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#0a0f1f] to-[#001f1f] text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <LeftSection />
        <RightSection />
      </div>
      <Footer />
    </div>
  );
}

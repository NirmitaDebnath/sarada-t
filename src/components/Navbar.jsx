import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4 fixed top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
      </div>
      <a
        className="bg-cyan-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold tracking-wide shadow hover:bg-cyan-700 transition text-sm md:text-base"
      >
        SaradaTraders
      </a>
    </nav>
  );
}

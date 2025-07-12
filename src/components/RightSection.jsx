import cartImage from '../assets/image2.png';

export default function RightSection() {
  return (
    <div className="md:w-1/2 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-24 md:py-28 text-center text-white">
      <img
        src={cartImage}
        alt="Shop Visual"
        className="w-32 md:w-48 h-32 md:h-48 animate-bounce object-contain mb-8"
      />

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://maps.app.goo.gl/KAok2jjFjuuh56yHA?g_st=aw"
          target="_blank"
          className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-400 transition text-sm md:text-base"
        >
          View on Map
        </a>
        <a
          href="tel:+919436122553"
          className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-300 transition text-sm md:text-base"
        >
          Call Us
        </a>
      </div>
    </div>
  );
}

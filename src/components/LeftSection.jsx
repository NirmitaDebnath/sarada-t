export default function LeftSection() {
  return (
    <div className="md:w-1/2 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-24 md:py-28 text-center">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400">
          Welcome to Sarada Traders
        </h1>
        <p className="text-base md:text-lg font-mono max-w-md mx-auto text-gray-300">
          Quality products, trusted service — visit or call us today!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-2 md:px-0">
        <div className="backdrop-blur-md bg-white/10 border border-cyan-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h4 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2">📍 Our Location</h4>
          <p className="text-gray-300 text-sm md:text-base">
            Sarada Traders is located at G.B.Bazar, Agartala.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/10 border border-cyan-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
          <h4 className="text-lg md:text-xl font-semibold text-cyan-300 mb-2">🛒 Our Products</h4>
          <p className="text-gray-300 text-sm md:text-base">
            We offer Electric items, Gas Stove products, Locks and many more.
          </p>
        </div>
      </div>
    </div>
  );
}

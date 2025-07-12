export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-gray-400 py-6 px-4 text-center mt-10">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()} Sarada Traders. All rights reserved.
      </p>
    </footer>
  );
}

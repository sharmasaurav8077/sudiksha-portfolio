const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10 text-center bg-dark mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-3">
        <h2 className="text-2xl font-serif font-bold text-champagne mb-2">Sudiksha<span className="text-primary">.</span></h2>
        <p className="text-gray-400 text-sm font-light tracking-wide">
          &copy; 2026 Sudiksha Jha. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs tracking-widest uppercase mt-2">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/saurav-sharma-77a649302"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 group"
          >
            <span className="transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-champagne group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
              Saurav Sharma
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-champagne transition-all duration-300 group-hover:w-full"></span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

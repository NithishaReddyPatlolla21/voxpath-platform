export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <a href="/" className="text-2xl font-bold tracking-tight">
        Vox<span className="text-cyan-400">Path</span>
      </a>

      <div className="flex items-center gap-6">
        <a
          href="#features"
          className="text-sm text-gray-300 transition hover:text-cyan-400"
        >
          Features
        </a>

        <a
          href="#about"
          className="text-sm text-gray-300 transition hover:text-cyan-400"
        >
          About
        </a>

        <button className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white/10">
          Sign in
        </button>
      </div>
    </nav>
  );
}
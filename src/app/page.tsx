
"use client"
import Navbar from "@/app/components/Navbar";
const features = [
  {
    number: "01",
    title: "Guided practice",
    description:
      "Explore interactive communication exercises designed to help you practise at your own pace.",
    tag: "Interactive learning",
  },
  {
    number: "02",
    title: "Track your progress",
    description:
      "See your completed exercises, review your practice history, and celebrate small improvements.",
    tag: "Progress insights",
  },
  {
    number: "03",
    title: "Personalised next steps",
    description:
      "Get suggestions for what to practise next based on your previous exercise activity.",
    tag: "AI-assisted guidance",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1020] text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          AI-powered communication practice
        </span>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Find your voice.
          <br />
          <span className="text-cyan-400">
            Build your confidence.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          Practise communication at your own pace with interactive
          exercises, personalised recommendations, and meaningful
          progress tracking.
        </p>

        <a
          href="#features"
          className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Explore VoxPath
        </a>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-20"
      >
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What you can do
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Small steps.
            <br />
            Meaningful progress.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            A focused space to practise, reflect, and discover
            your next learning step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {feature.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {feature.tag}
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {feature.description}
              </p>

              <div className="mt-8 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24"
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            The idea behind VoxPath
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
            Communication is a journey, not a race.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            VoxPath is a learning platform concept that makes
            communication practice more approachable through
            interactive activities, useful feedback, and
            progress insights.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
  © 2026 VoxPath. Built for better communication.
</footer>
    </main>
  );
}

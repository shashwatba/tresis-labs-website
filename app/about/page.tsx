export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
      </div>

      <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          Tresis Labs is an independent research lab run out of an apartment.
          The goal is simple: build interesting things, understand them deeply,
          and share the process openly.
        </p>
        <p>
          The work spans systems programming, compilers, and machine learning —
          sometimes formal research, sometimes just following a curiosity down a rabbit hole.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Reach out via email or find the work on GitHub.
        </p>
      </div>
    </div>
  );
}

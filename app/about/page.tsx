export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-2xl">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Tresis Labs</h1>
      </div>

      <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
        <p>
          Tresis Labs is an independent research lab run out of an apartment. The goal is simple:
          build interesting things, understand them deeply, and share the process openly.
        </p>
        <p>
          The work spans systems programming, compilers, and machine learning — sometimes
          formal research, sometimes just following a curiosity down a rabbit hole. Both
          kinds of work end up here.
        </p>
      </div>

      <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Contact</h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm">
          Reach out via email or find the work on GitHub.
        </p>
      </div>
    </div>
  );
}

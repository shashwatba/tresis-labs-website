import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-10 py-8">
        <Link
          href="/privacy/krishna-chat"
          className="text-sm text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
        >
          Krishna Chat Privacy
        </Link>
      </div>
    </footer>
  );
}

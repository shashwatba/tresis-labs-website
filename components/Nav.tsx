import Link from "next/link";

const links = [
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Lab Notes" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:bg-amber-400 transition-colors" />
          <span className="font-semibold tracking-tight">Tresis Labs</span>
        </Link>
        <ul className="flex gap-6 text-sm text-stone-500 dark:text-stone-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

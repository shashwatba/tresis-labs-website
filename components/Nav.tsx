import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Lab Notes" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Tresis Labs
        </Link>
        <ul className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

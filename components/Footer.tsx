import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/privacy/krishna-chat", label: "Krishna Chat Privacy" },
    { href: "/krishna-chat/delete-account", label: "Delete Krishna Chat Account" },
  ];

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-10 py-8 flex flex-wrap gap-x-6 gap-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-stone-500 hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

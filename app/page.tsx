import Link from "next/link";
import { getPostMetas } from "@/lib/posts";

export default function Home() {
  const recentResearch = getPostMetas("research").slice(0, 3);
  const recentBlog = getPostMetas("blog").slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tresis Labs</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
          An independent research lab exploring systems, compilers, and machine
          learning — built in an apartment, one experiment at a time.
        </p>
      </section>

      {/* Recent Research */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Research</h2>
          <Link href="/research" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            View all →
          </Link>
        </div>
        {recentResearch.length === 0 ? (
          <p className="text-neutral-500 text-sm">No research posts yet.</p>
        ) : (
          <ul className="space-y-3">
            {recentResearch.map((post) => (
              <li key={post.slug}>
                <Link href={`/research/${post.slug}`} className="group flex items-start justify-between gap-4">
                  <span className="font-medium group-hover:underline">{post.title}</span>
                  <span className="text-sm text-neutral-500 shrink-0">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Recent Blog */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Lab Notes</h2>
          <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            View all →
          </Link>
        </div>
        {recentBlog.length === 0 ? (
          <p className="text-neutral-500 text-sm">No posts yet.</p>
        ) : (
          <ul className="space-y-3">
            {recentBlog.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex items-start justify-between gap-4">
                  <span className="font-medium group-hover:underline">{post.title}</span>
                  <span className="text-sm text-neutral-500 shrink-0">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

import Link from "next/link";
import { getPostMetas } from "@/lib/posts";

function PostList({ posts, href }: { posts: ReturnType<typeof getPostMetas>; href: string }) {
  return posts.length === 0 ? (
    <p className="text-stone-400 text-sm italic">Nothing published yet.</p>
  ) : (
    <ul className="divide-y divide-stone-100 dark:divide-stone-900">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`${href}/${post.slug}`}
            className="group flex items-start justify-between gap-4 py-3"
          >
            <span className="font-medium text-stone-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
              {post.title}
            </span>
            <span className="text-xs text-stone-400 shrink-0 mt-0.5 tabular-nums">{post.date}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const recentResearch = getPostMetas("research").slice(0, 3);
  const recentBlog = getPostMetas("blog").slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
          Tresis Labs
        </h1>
        <p className="text-base text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed">
          Exploring systems, compilers, and machine learning —
          built in an apartment, one experiment at a time.
        </p>
      </section>

      {/* Recent Research */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Research</h2>
          <Link
            href="/research"
            className="text-xs text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            All posts →
          </Link>
        </div>
        <PostList posts={recentResearch} href="/research" />
      </section>

      {/* Recent Blog */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-medium">Lab Notes</h2>
          <Link
            href="/blog"
            className="text-xs text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            All posts →
          </Link>
        </div>
        <PostList posts={recentBlog} href="/blog" />
      </section>
    </div>
  );
}

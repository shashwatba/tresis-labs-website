import Link from "next/link";
import { getPostMetas } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPostMetas("blog");

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium">
          Lab Notes
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Explorations & builds</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-md">
          Informal writing, serialized projects, and ideas in progress.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-stone-400 italic text-sm">Nothing published yet — check back soon.</p>
      ) : (
        <ul className="space-y-1">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-6 -mx-3 px-3 py-3.5 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              >
                <div className="space-y-0.5">
                  <p className="font-medium text-stone-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </p>
                  {post.description && (
                    <p className="text-sm text-stone-500 dark:text-stone-400">{post.description}</p>
                  )}
                </div>
                <span className="text-xs text-stone-400 shrink-0 mt-0.5 tabular-nums">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

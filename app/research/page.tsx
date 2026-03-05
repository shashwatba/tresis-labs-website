import Link from "next/link";
import { getPostMetas } from "@/lib/posts";

export default function ResearchPage() {
  const posts = getPostMetas("research");

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Research</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Formal projects, experiments, and findings.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-neutral-500">Nothing published yet — check back soon.</p>
      ) : (
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link href={`/research/${post.slug}`} className="group space-y-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-semibold text-lg group-hover:underline">{post.title}</h2>
                  <span className="text-sm text-neutral-500 shrink-0">{post.date}</span>
                </div>
                {post.description && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostMetas, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getPostMetas("research").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("research", slug);
  if (!post) return {};
  return { title: `${post.title} — Tresis Labs` };
}

export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("research", slug);
  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content", "research", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <article>
      <header className="mb-12 space-y-4 pb-8 border-b border-stone-200 dark:border-stone-800">
        <Link
          href="/research"
          className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 font-medium hover:text-amber-500 transition-colors"
        >
          ← Research
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed">{post.description}</p>
        )}
        <p className="text-xs text-stone-400 tabular-nums">{post.date}</p>
      </header>
      <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-amber-600 dark:prose-a:text-amber-400 prose-code:text-stone-800 dark:prose-code:text-stone-200">
        <MDXRemote source={source} />
      </div>
    </article>
  );
}

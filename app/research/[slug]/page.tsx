import fs from "fs";
import path from "path";
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
    <article className="prose dark:prose-invert max-w-none">
      <header className="not-prose mb-8 space-y-2">
        <p className="text-sm text-neutral-500">{post.date}</p>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        {post.description && (
          <p className="text-neutral-600 dark:text-neutral-400">{post.description}</p>
        )}
      </header>
      <MDXRemote source={source} />
    </article>
  );
}

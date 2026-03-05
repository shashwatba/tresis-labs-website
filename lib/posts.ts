import fs from "fs";
import path from "path";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

const contentDir = path.join(process.cwd(), "content");

export function getPostMetas(section: "research" | "blog"): PostMeta[] {
  const dir = path.join(contentDir, section);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const meta = parseFrontmatter(raw);
    return { slug, ...meta };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(section: "research" | "blog", slug: string) {
  const filePath = path.join(contentDir, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const meta = parseFrontmatter(raw);
  return { slug, ...meta };
}

function parseFrontmatter(raw: string): Omit<PostMeta, "slug"> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { title: "Untitled", date: "" };

  const frontmatter = match[1];
  const title = frontmatter.match(/^title:\s*"?(.+?)"?\s*$/m)?.[1] ?? "Untitled";
  const date = frontmatter.match(/^date:\s*(.+?)\s*$/m)?.[1] ?? "";
  const description = frontmatter.match(/^description:\s*"?(.+?)"?\s*$/m)?.[1];

  return { title, date, description };
}

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

function slugToFilename(): Map<string, string> {
  const map = new Map<string, string>();
  for (const f of fs.readdirSync(BLOG_DIR)) {
    if (!f.endsWith('.md')) continue;
    map.set(f.replace(/\.md$/, '').toLowerCase(), f);
  }
  return map;
}

export function getAllBlogSlugs(): string[] {
  return [...slugToFilename().keys()];
}

export function getBlogPost(slug: string): BlogPost {
  const filename = slugToFilename().get(slug);
  if (!filename) throw new Error(`Blog post not found: ${slug}`);
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
  const { data, content } = matter(raw);
  return { slug, title: data.title, description: data.description, content };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs().map((slug) => getBlogPost(slug));
}

export async function renderBlogContent(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html).process(content);
  return result.toString();
}

import type { APIRoute } from 'astro';
import { posts } from '../data/posts';

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/dolphin-tour-lovina/', '/transportasi/', '/transportasi/sewa-mobil-singaraja/', '/transportasi/rombongan/', '/tur-bali-utara/', '/sewa-kendaraan-jangka-panjang/', '/gallery', '/blog', ...posts.map((post) => `/blog/${post.slug}`)];
  const urls = paths.map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

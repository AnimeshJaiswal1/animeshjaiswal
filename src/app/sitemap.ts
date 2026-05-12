import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {const base='https://zachshev.com';return ['','/artwork','/commission-process','/commission-pricing','/available-works','/about','/contact'].map(p=>({url:`${base}${p}`,lastModified:new Date()}));}

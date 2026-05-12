import Link from 'next/link';
import { nav } from '@/data/site';
export function SiteFooter(){return <footer className='mt-24 border-t border-black/10 py-12'><div className='container-x'><div className='serif text-3xl'>Zach Shev</div><div className='mt-6 flex flex-wrap gap-6 text-sm text-secondary'>{nav.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}<a href='https://www.instagram.com' target='_blank'>Instagram</a></div><p className='mt-8 text-xs text-secondary'>© {new Date().getFullYear()} Zach Shev. All rights reserved.</p></div></footer>}

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
export function generateStaticParams() { return PROJECTS.map(p => ({slug:p.slug})); }
export default async function ProjectDetail({params}) { const {slug}=await params; const p=PROJECTS.find(x=>x.slug===slug); if(!p)return <main className="container"><h1>Project not found</h1></main>; return <main className="container" style={{padding:'3rem 0',maxWidth:900}}><Link href="/projects">← All projects</Link><h1>{p.title}</h1><p>{p.meta}</p><h2>Problem and Approach</h2>{p.summary.map((t,i)=><p key={i}>{t}</p>)}<h2>Tools and Methods</h2><p>{p.tools.join(' · ')}</p><h2>Project Visuals</h2>{p.images.map((im,i)=><figure key={i}><Image src={im.src} alt={im.alt} style={{width:'100%',height:'auto',maxWidth:700}}/><figcaption>{im.caption}</figcaption></figure>)}{p.links.map(l=><p key={l.href}><a href={l.href}>{l.label}</a></p>)}</main> }

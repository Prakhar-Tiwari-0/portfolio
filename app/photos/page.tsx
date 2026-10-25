'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
const photos=[
  {name:'Misty forest',src:'/photos/forest.webp',description:'A trail in the Pacific Northwest.'},
  {name:'Coastline',src:'/photos/coast.webp',description:'The Big Sur coastline, photographed in 2023.'},
  {name:'Bixby Bridge',src:'/photos/bridge.webp',description:'From the same 2023 Big Sur trip.'},
  {name:'Mountain goats',src:'/photos/alpine.webp',description:'Glacier National Park, 2025.'},
  {name:'Harbor',src:'/photos/harbor.webp',description:'A 2024 trip to California.'}
];
export default function Photos(){const [selected,setSelected]=useState<number|null>(null);useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setSelected(null)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[]);return <main className="page photography-page"><div className="photo-nav"><Link href="/">Back to home</Link></div><h1>ME!</h1><p className="photo-intro">I currently use an iPhone 15 main camera, alongside Casio Exilim EX-Z1050 for vintage shots, and I'm experimenting with analog film. I also occasionally work with a Cannon DLSR.</p><div className="photo-grid">{photos.map((p,i)=><button className="photo-card" key={p.src} onClick={()=>setSelected(i)} aria-label={`View ${p.name}`}><img src={p.src} alt={p.name} loading="lazy"/><span className="photo-card-title">{p.name}</span><span className="photo-card-caption">{p.description}</span></button>)}</div>{selected!==null&&<div role="dialog" aria-modal="true" aria-label={photos[selected].name} className="lightbox" onClick={()=>setSelected(null)}><button className="close-photo" onClick={()=>setSelected(null)} aria-label="Close photo">Close ×</button><img src={photos[selected].src} alt={photos[selected].name} onClick={e=>e.stopPropagation()}/><p>{photos[selected].name} — {photos[selected].description}</p></div>}</main>}

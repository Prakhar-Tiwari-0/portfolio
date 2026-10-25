import type {Metadata, Viewport} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Prakhar Tiwari',description:'Computer Science and Applied Mathematics at the University of Washington. Research, projects, and notes.'};
export const viewport:Viewport={width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://northline-auto.vercel.app';
export const metadata: Metadata = {metadataBase:new URL(url),title:'NORTHLINE AUTO — Find your own direction.',description:'Four distinct automotive brands. One considered choice. Explore, compare and configure your next drive in the NORTHLINE AUTO concept showroom.',openGraph:{title:'NORTHLINE AUTO — Find your own direction.',description:'A considered automotive experience. Explore the collection.',type:'website',images:[{url:'/images/hero.jpg',width:1536,height:1024}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export const viewport: Viewport = {themeColor:'#eeeee8'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body></html>}

'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
export function SmoothScroll(){useEffect(()=>{const lenis=new Lenis({duration:1.2});let id=0;const raf=(t:number)=>{lenis.raf(t);id=requestAnimationFrame(raf)};id=requestAnimationFrame(raf);return()=>cancelAnimationFrame(id)},[]);return null}

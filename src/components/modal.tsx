'use client';
import { useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
export function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}) {
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const dialog=ref.current; const previous=document.activeElement as HTMLElement;dialog?.showModal();return ()=>{dialog?.close();previous?.focus();}},[]);
 return <dialog ref={ref} onCancel={onClose} aria-labelledby="modal-title" onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)onClose();}}}><div className="modal-heading"><h2 id="modal-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={23}/></button></div>{children}</dialog>;
}

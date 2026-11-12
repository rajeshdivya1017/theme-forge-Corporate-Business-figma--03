// Lightweight canvas-free dashboard charts: bars animate in when visible.
document.addEventListener('DOMContentLoaded', ()=>{document.querySelectorAll('.bar').forEach((bar, i)=>{const h=bar.style.height;bar.style.height='0';setTimeout(()=>bar.style.height=h, 120+i*90)});});

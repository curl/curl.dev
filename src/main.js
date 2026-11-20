import 'highlight.js/styles/atom-one-dark.css';
import './styles.css';
import hljs from 'highlight.js';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import logoUrl from './assets/curl-logo.svg';

document.addEventListener('DOMContentLoaded', function(){
  if(window.hljs === undefined){
    // ensure hljs is available
    window.hljs = hljs;
  }
  if(window.hljs) window.hljs.highlightAll();

  // Set bundled logo path (so the svg is included in the Vite build)
  const logoEl = document.getElementById('site-logo');
  if(logoEl) logoEl.src = logoUrl;

  document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', async function(){
      const pre = this.nextElementSibling;
      if(!pre) return;
      const text = pre.innerText;
      try{
        await navigator.clipboard.writeText(text);
        showSuccess(this);
      }catch(e){
        // fallback
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try{document.execCommand('copy'); showSuccess(this);}catch(err){console.error('copy failed', err)}
        sel.removeAllRanges();
      }
    });
  });

  function showSuccess(btn){
    let t = btn.parentElement.querySelector('.copy-success');
    if(!t){
      t = document.createElement('div');
      t.className = 'copy-success';
      t.textContent = 'Copied';
      btn.parentElement.appendChild(t);
    }
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),1200);
  }
});

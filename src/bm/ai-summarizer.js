javascript:(function(){
  try{
    if(window._aiSumPanel){window._aiSumPanel.remove();window._aiSumPanel=null;return;}
    function getArticle(){
      const article=document.querySelector('article,main,[role="main"],.content,.post-content,.entry-content,.article-body');
      if(article)return article.innerText;
      const paragraphs=document.querySelectorAll('p');
      if(paragraphs.length>3)return Array.from(paragraphs).map(p=>p.innerText).join('\n\n');
      return document.body.innerText;
    }

    const stopWords=new Set(['the','a','an','and','or','but','in','on','at','to','for','of','with','by','is','are','was','were','be','been','being','have','has','had','do','does','did','will','would','could','should','may','might','shall','can','this','that','these','those','it','its','i','we','you','he','she','they','me','him','her','us','them','my','your','his','our','their','what','which','who','whom','when','where','how','why','not','no','nor','so','if','then','than','too','very','just','about','also','more','most','other','some','such','only','own','same','than']);

    function scoreSentences(text){
      const sentences=text.replace(/\n+/g,' ').split(/(?<=[.!?])\s+/).filter(s=>s.trim().length>20);
      const wordFreq={};
      const words=text.toLowerCase().match(/\b[a-z]{3,}\b/g)||[];
      words.forEach(w=>{if(!stopWords.has(w))wordFreq[w]=(wordFreq[w]||0)+1;});
      return sentences.map((s,i)=>{
        const sWords=(s.toLowerCase().match(/\b[a-z]{3,}\b/g)||[]);
        const score=sWords.reduce((sum,w)=>sum+(wordFreq[w]||0),0)/Math.max(sWords.length,1);
        const posBonus=i<sentences.length*0.3?1.3:1;
        return{sentence:s.trim(),score:score*posBonus,index:i};
      });
    }

    function extractiveSummarize(text,sentCount){
      const scored=scoreSentences(text);
      if(scored.length<=sentCount)return scored.map(s=>s.sentence).join(' ');
      scored.sort((a,b)=>b.score-a.score);
      const top=scored.slice(0,sentCount).sort((a,b)=>a.index-b.index);
      return top.map(s=>s.sentence).join(' ');
    }

    function getHighlights(text,sentCount){
      const scored=scoreSentences(text);
      if(scored.length<=sentCount)return scored.map(s=>s.sentence);
      scored.sort((a,b)=>b.score-a.score);
      return scored.slice(0,sentCount).sort((a,b)=>a.index-b.index).map(s=>s.sentence);
    }

    const text=getArticle();
    const sentenceCount=Math.max(3,Math.min(10,Math.floor(text.split(/(?<=[.!?])\s+/).length*0.15)));
    const summary=extractiveSummarize(text,sentenceCount);
    const highlights=getHighlights(text,3);
    const wordCount=text.split(/\s+/).length;
    const readTime=Math.ceil(wordCount/200);

    const panel=document.createElement('div');
    panel.id='ai-sum-panel';
    window._aiSumPanel=panel;
    panel.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;max-height:80vh;background:#fafafa;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,0.2);z-index:999999;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;display:flex;flex-direction:column;';

    const highlightHtml=highlights.map(h=>`<div style="padding:10px 14px;background:#fff;border-left:3px solid #6366f1;border-radius:0 8px 8px 0;margin-bottom:8px;font-size:13px;color:#374151;line-height:1.5;">${h}</div>`).join('');

    panel.innerHTML=`
      <div style="padding:18px 20px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
        <div>
          <div style="font-size:16px;font-weight:700;">✨ AI Summarizer</div>
          <div style="font-size:12px;opacity:0.8;margin-top:2px;">Extractive summarization — no API needed</div>
        </div>
        <button id="ais-close" style="background:none;border:none;color:#fff;font-size:20px;cursor:pointer;opacity:0.8;">✕</button>
      </div>
      <div style="padding:16px 20px;display:flex;gap:16px;border-bottom:1px solid #e5e7eb;flex-shrink:0;">
        <div style="text-align:center;flex:1;">
          <div style="font-size:22px;font-weight:700;color:#4f46e5;">${wordCount.toLocaleString()}</div>
          <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;">Words</div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:22px;font-weight:700;color:#4f46e5;">${readTime}m</div>
          <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;">Read Time</div>
        </div>
        <div style="text-align:center;flex:1;">
          <div style="font-size:22px;font-weight:700;color:#4f46e5;">${sentenceCount}</div>
          <div style="font-size:11px;color:#9ca3af;text-transform:uppercase;">Key Points</div>
        </div>
      </div>
      <div style="overflow-y:auto;flex:1;padding:16px 20px;">
        <div style="margin-bottom:20px;">
          <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px;">📝 Summary</div>
          <div style="font-size:14px;color:#4b5563;line-height:1.7;padding:14px;background:#fff;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.06);">${summary}</div>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#374151;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px;">🔑 Key Highlights</div>
          ${highlightHtml}
        </div>
      </div>
      <div style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;gap:8px;flex-shrink:0;">
        <button id="ais-copy" style="flex:1;padding:10px;border:none;border-radius:8px;background:#4f46e5;color:#fff;font-size:13px;font-weight:600;cursor:pointer;">📋 Copy Summary</button>
        <button id="ais-copy-full" style="flex:1;padding:10px;border:none;border-radius:8px;background:#fff;color:#374151;font-size:13px;border:1px solid #e5e7eb;cursor:pointer;">📄 Copy Full</button>
      </div>`;

    document.body.appendChild(panel);

    panel.querySelector('#ais-close').addEventListener('click',function(){panel.remove();window._aiSumPanel=null;});
    panel.querySelector('#ais-copy').addEventListener('click',function(){
      navigator.clipboard.writeText(summary).then(()=>{this.textContent='✓ Copied!';setTimeout(()=>{this.textContent='📋 Copy Summary';},1500);});
    });
    panel.querySelector('#ais-copy-full').addEventListener('click',function(){
      const full='## Summary\n\n'+summary+'\n\n## Key Highlights\n\n'+highlights.map(h=>'> '+h).join('\n\n');
      navigator.clipboard.writeText(full).then(()=>{this.textContent='✓ Copied!';setTimeout(()=>{this.textContent='📄 Copy Full';},1500);});
    });
  }catch(e){alert('Error: '+e.message);}
})();

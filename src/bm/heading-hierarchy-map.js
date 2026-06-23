javascript:(function(){
  try{
    if(window._hhMapPanel){window._hhMapPanel.remove();window._hhMapPanel=null;return;}
    const headings=document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    if(headings.length===0){alert('No headings found on this page.');return;}

    const tree=[];
    let root={level:0,children:[],text:'Page',id:'root'};
    tree.push(root);
    const stack=[root];

    headings.forEach((h,i)=>{
      const level=parseInt(h.tagName[1]);
      const node={level,children:[],text:h.textContent.trim().substring(0,80),tag:h.tagName,originalEl:h,id:'h'+i};
      while(stack.length>1&&stack[stack.length-1].level>=level)stack.pop();
      stack[stack.length-1].children.push(node);
      stack.push(node);
    });

    const colors={1:'#ef4444',2:'#f97316',3:'#eab308',4:'#22c55e',5:'#3b82f6',6:'#8b5cf6'};
    const bgColors={1:'#fef2f2',2:'#fff7ed',3:'#fefce8',4:'#f0fdf4',5:'#eff6ff',6:'#f5f3ff'};

    function renderNode(node,depth){
      if(node.level===0){
        let html=`<div style="padding:8px 12px;background:#1e293b;color:#fff;border-radius:8px;font-size:14px;font-weight:600;display:inline-flex;align-items:center;gap:8px;">
          <span style="background:#6366f1;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;">📄</span>
          ${node.text} <span style="font-size:11px;opacity:0.6;font-weight:400;">${headings.length} headings</span>
        </div>`;
        if(node.children.length>0){
          html+=`<div style="margin-left:24px;margin-top:4px;padding-left:20px;border-left:2px solid #334155;">`;
          node.children.forEach(c=>{html+=renderNode(c,1);});
          html+=`</div>`;
        }
        return html;
      }
      const color=colors[node.level]||'#6b7280';
      const bg=bgColors[node.level]||'#f9fafb';
      const childBadge=node.children.length>0?`<span style="font-size:10px;background:${color};color:#fff;padding:1px 6px;border-radius:10px;margin-left:4px;">${node.children.length} child${node.children.length>1?'ren':''}</span>`:'';
      const leafBadge=node.children.length===0?`<span style="font-size:10px;background:#9ca3af;color:#fff;padding:1px 6px;border-radius:10px;margin-left:4px;">leaf</span>`:'';

      let html=`<div style="margin-top:4px;">
        <div class="hh-map-item" data-id="${node.id}" style="padding:6px 10px;background:${bg};border-left:3px solid ${color};border-radius:0 6px 6px 0;font-size:13px;color:#374151;cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all 0.15s;" onmouseover="this.style.transform='translateX(2px)'" onmouseout="this.style.transform='none'">
          <div style="display:flex;align-items:center;gap:6px;min-width:0;">
            <span style="font-size:10px;font-weight:700;color:${color};min-width:22px;">${node.tag}</span>
            <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${node.text}</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;margin-left:8px;">
            ${childBadge}${leafBadge}
          </div>
        </div>`;
      if(node.children.length>0){
        html+=`<div style="margin-left:16px;padding-left:12px;border-left:1px dashed ${color}40;">`;
        node.children.forEach(c=>{html+=renderNode(c,depth+1);});
        html+=`</div>`;
      }
      html+=`</div>`;
      return html;
    }

    const panel=document.createElement('div');
    panel.id='hh-map-panel';
    window._hhMapPanel=panel;
    panel.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:560px;max-height:80vh;background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(0,0,0,0.2);z-index:999999;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;display:flex;flex-direction:column;';

    const legendHtml=Object.entries(colors).map(([l,c])=>`<div style="display:flex;align-items:center;gap:4px;font-size:11px;"><div style="width:10px;height:10px;border-radius:2px;background:${c};"></div>H${l}</div>`).join('');

    panel.innerHTML=`
      <div style="padding:16px 20px;background:linear-gradient(135deg,#1e293b,#334155);color:#fff;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
        <div>
          <div style="font-size:16px;font-weight:700;">🗺️ Heading Hierarchy Map</div>
          <div style="font-size:12px;opacity:0.7;margin-top:2px;">Visual tree structure of page headings</div>
        </div>
        <button id="hhm-close" style="background:none;border:none;color:#fff;font-size:20px;cursor:pointer;opacity:0.8;">✕</button>
      </div>
      <div style="padding:10px 20px;border-bottom:1px solid #e5e7eb;display:flex;gap:12px;align-items:center;flex-shrink:0;">
        ${legendHtml}
        <div style="flex:1;"></div>
        <span style="font-size:11px;color:#9ca3af;">Click heading to jump to it</span>
      </div>
      <div style="overflow-y:auto;flex:1;padding:16px 20px;max-height:60vh;">
        ${renderNode(root,0)}
      </div>`;

    document.body.appendChild(panel);

    panel.querySelector('#hhm-close').addEventListener('click',function(){panel.remove();window._hhMapPanel=null;});

    panel.querySelectorAll('.hh-map-item').forEach(el=>{
      el.addEventListener('click',function(){
        const id=this.dataset.id;
        if(id==='root')return;
        const idx=parseInt(id.substring(1));
        const target=headings[idx];
        if(target){target.scrollIntoView({behavior:'smooth',block:'center'});target.style.transition='background 0.3s';target.style.background='#fef08a';setTimeout(()=>{target.style.background='';},2000);}
      });
    });
  }catch(e){alert('Error: '+e.message);}
})();

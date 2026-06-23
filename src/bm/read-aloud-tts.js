javascript:(function(){
  try{
    if(window._ttsPanel){window._ttsPanel.remove();window._ttsPanel=null;return;}
    const synth=window.speechSynthesis;
    let speaking=false, paused=false, utterance=null, voices=[];
    const panel=document.createElement('div');
    panel.id='tts-panel';
    window._ttsPanel=panel;
    panel.style.cssText='position:fixed;bottom:20px;right:20px;width:360px;background:#1a1a2e;color:#e0e0e0;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:999999;font-family:system-ui,-apple-system,sans-serif;overflow:hidden;';

    const loadVoices=function(){
      voices=synth.getVoices();
      const sel=panel.querySelector('#tts-voice');
      sel.innerHTML='';
      const en=voices.filter(v=>v.lang.startsWith('en'));
      const other=voices.filter(v=>!v.lang.startsWith('en'));
      [...en,...other].forEach((v,i)=>{
        const opt=document.createElement('option');
        opt.value=i;
        opt.textContent=v.name+' ('+v.lang+')';
        sel.appendChild(opt);
      });
    };

    panel.innerHTML=`
      <div style="padding:16px 16px 12px;background:linear-gradient(135deg,#16213e,#0f3460);display:flex;justify-content:space-between;align-items:center;border-radius:16px 16px 0 0;">
        <span style="font-size:15px;font-weight:600;">🔊 Read Aloud</span>
        <button id="tts-close" style="background:none;border:none;color:#aaa;font-size:18px;cursor:pointer;padding:2px 6px;border-radius:4px;">✕</button>
      </div>
      <div style="padding:16px;">
        <div style="margin-bottom:12px;">
          <label style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Voice</label>
          <select id="tts-voice" style="width:100%;margin-top:4px;padding:8px 10px;border-radius:8px;border:1px solid #333;background:#16213e;color:#e0e0e0;font-size:13px;"></select>
        </div>
        <div style="margin-bottom:12px;">
          <label style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Speed: <span id="tts-rate-val">1.0</span>x</label>
          <input id="tts-rate" type="range" min="0.5" max="3" step="0.1" value="1" style="width:100%;margin-top:4px;accent-color:#e94560;">
        </div>
        <div style="margin-bottom:12px;">
          <label style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Pitch: <span id="tts-pitch-val">1.0</span></label>
          <input id="tts-pitch" type="range" min="0.5" max="2" step="0.1" value="1" style="width:100%;margin-top:4px;accent-color:#e94560;">
        </div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <button id="tts-play" style="flex:1;padding:10px;border:none;border-radius:8px;background:#e94560;color:#fff;font-size:14px;font-weight:600;cursor:pointer;">▶ Play</button>
          <button id="tts-pause" style="flex:1;padding:10px;border:none;border-radius:8px;background:#333;color:#e0e0e0;font-size:14px;cursor:pointer;" disabled>⏸ Pause</button>
          <button id="tts-stop" style="flex:1;padding:10px;border:none;border-radius:8px;background:#333;color:#e0e0e0;font-size:14px;cursor:pointer;" disabled>⏹ Stop</button>
        </div>
        <div id="tts-progress" style="width:100%;height:4px;background:#333;border-radius:2px;overflow:hidden;margin-bottom:8px;">
          <div id="tts-bar" style="width:0%;height:100%;background:#e94560;transition:width 0.3s;"></div>
        </div>
        <div id="tts-status" style="font-size:12px;color:#888;text-align:center;">Ready to read</div>
      </div>`;

    document.body.appendChild(panel);
    loadVoices();
    if(synth.onvoiceschanged!==undefined)synth.onvoiceschanged=loadVoices;

    const rate=panel.querySelector('#tts-rate');
    const pitch=panel.querySelector('#tts-pitch');
    rate.addEventListener('input',function(){panel.querySelector('#tts-rate-val').textContent=this.value;});
    pitch.addEventListener('input',function(){panel.querySelector('#tts-pitch-val').textContent=this.value;});

    panel.querySelector('#tts-close').addEventListener('click',function(){
      synth.cancel();
      panel.remove();
      window._ttsPanel=null;
    });

    function getSelectedText(){
      const sel=window.getSelection().toString().trim();
      if(sel)return sel;
      const article=document.querySelector('article,main,[role="main"],.content,.post-content,.entry-content');
      return article?article.innerText:document.body.innerText;
    }

    panel.querySelector('#tts-play').addEventListener('click',function(){
      if(paused){synth.resume();paused=false;speaking=true;updateUI();return;}
      synth.cancel();
      const text=getSelectedText();
      if(!text){panel.querySelector('#tts-status').textContent='No text found';return;}
      const voiceIdx=parseInt(panel.querySelector('#tts-voice').value)||0;
      utterance=new SpeechSynthesisUtterance(text);
      if(voices[voiceIdx])utterance.voice=voices[voiceIdx];
      utterance.rate=parseFloat(rate.value);
      utterance.pitch=parseFloat(pitch.value);
      utterance.onend=function(){speaking=false;paused=false;updateUI();panel.querySelector('#tts-bar').style.width='100%';panel.querySelector('#tts-status').textContent='Finished';};
      utterance.onerror=function(){speaking=false;paused=false;updateUI();panel.querySelector('#tts-status').textContent='Error occurred';};
      synth.speak(utterance);
      speaking=true;paused=false;
      panel.querySelector('#tts-status').textContent='Reading...';
      panel.querySelector('#tts-bar').style.width='0%';
      updateUI();
    });

    panel.querySelector('#tts-pause').addEventListener('click',function(){
      if(speaking&&!paused){synth.pause();paused=true;speaking=false;updateUI();}
    });

    panel.querySelector('#tts-stop').addEventListener('click',function(){
      synth.cancel();speaking=false;paused=false;updateUI();
      panel.querySelector('#tts-bar').style.width='0%';
      panel.querySelector('#tts-status').textContent='Stopped';
    });

    function updateUI(){
      panel.querySelector('#tts-play').disabled=speaking&&!paused;
      panel.querySelector('#tts-pause').disabled=!speaking&&!paused;
      panel.querySelector('#tts-stop').disabled=!speaking&&!paused;
      panel.querySelector('#tts-play').textContent=paused?'▶ Resume':'▶ Play';
    }
  }catch(e){alert('Error: '+e.message);}
})();

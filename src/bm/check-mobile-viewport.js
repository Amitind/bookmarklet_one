javascript:(function(){
    const viewport = document.querySelector('meta[name="viewport"]');
    const viewportContent = viewport ? viewport.content : '';
    const hasViewport = viewport !== null;
    const hasProperViewport = viewportContent.includes('width=device-width') && 
                             viewportContent.includes('initial-scale=1');
    
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 80%;
        max-width: 800px;
        max-height: 80vh;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10000;
        overflow-y: auto;
    `;
    
    const content = document.createElement('div');
    content.innerHTML = `
        <h2 style="margin-top: 0;">Mobile Viewport Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${hasProperViewport ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${hasProperViewport ? '#4CAF50' : '#ff4444'}">
                ${hasViewport ? 
                    (hasProperViewport ? 'Proper mobile viewport configured' : 'Viewport configured but not optimal') : 
                    'No viewport meta tag found'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Viewport Configuration</h3>
            ${hasViewport ? 
                `<p style="margin: 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">${viewportContent}</p>` : 
                '<p style="margin: 0;">No viewport meta tag found in the document.</p>'
            }
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Recommended Configuration</h3>
            <p style="margin: 0;">For optimal mobile display, use:</p>
            <pre style="margin: 5px 0 0 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</pre>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
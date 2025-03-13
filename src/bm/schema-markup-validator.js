javascript:(function(){
    const results = [];
    
    // Check JSON-LD
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    jsonLdScripts.forEach((script, index) => {
        try {
            const data = JSON.parse(script.textContent);
            results.push({
                type: 'JSON-LD',
                location: `script[type="application/ld+json"]:nth-child(${index + 1})`,
                data: data,
                valid: true
            });
        } catch (e) {
            results.push({
                type: 'JSON-LD',
                location: `script[type="application/ld+json"]:nth-child(${index + 1})`,
                error: e.message,
                valid: false
            });
        }
    });
    
    // Check Microdata
    const microdataElements = document.querySelectorAll('[itemtype]');
    microdataElements.forEach((element, index) => {
        const itemType = element.getAttribute('itemtype');
        const itemProps = {};
        element.querySelectorAll('[itemprop]').forEach(prop => {
            itemProps[prop.getAttribute('itemprop')] = prop.textContent;
        });
        
        results.push({
            type: 'Microdata',
            location: `[itemtype]:nth-child(${index + 1})`,
            data: {
                type: itemType,
                properties: itemProps
            },
            valid: true
        });
    });
    
    // Create and show results popup
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
        <h2 style="margin-top: 0;">Schema Markup Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.parentElement.parentElement.remove()" style="float: right;">Close</button>
        </div>
        ${results.length === 0 ? '<p>No schema markup found on this page.</p>' : ''}
        ${results.map(result => `
            <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${result.valid ? '#ddd' : '#ff4444'}; border-radius: 4px;">
                <h3 style="margin: 0 0 10px 0;">${result.type}</h3>
                <p style="margin: 0 0 10px 0;"><strong>Location:</strong> ${result.location}</p>
                ${result.valid ? 
                    `<pre style="margin: 0; white-space: pre-wrap;">${JSON.stringify(result.data, null, 2)}</pre>` :
                    `<p style="color: #ff4444; margin: 0;">Error: ${result.error}</p>`
                }
            </div>
        `).join('')}
    `;
    
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
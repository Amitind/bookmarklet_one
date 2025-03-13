javascript:(function(){
    const structuredData = {
        jsonLd: document.querySelectorAll('script[type="application/ld+json"]'),
        microdata: document.querySelectorAll('[itemtype]'),
        rdfa: document.querySelectorAll('[vocab]')
    };
    
    const hasStructuredData = Object.values(structuredData).some(data => data.length > 0);
    
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
        <h2 style="margin-top: 0;">Structured Data Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${hasStructuredData ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${hasStructuredData ? '#4CAF50' : '#ff4444'}">
                ${hasStructuredData ? 'Structured data found' : 'No structured data found'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Structured Data Types</h3>
            <div style="margin: 0;">
                ${Object.entries(structuredData).map(([type, elements]) => `
                    <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <strong>${type}:</strong> ${elements.length > 0 ? 
                            `<span style="color: #4CAF50">Present</span> (${elements.length} found)` : 
                            '<span style="color: #ff4444">Missing</span>'}
                    </div>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Validation</h3>
            <p style="margin: 0;">To validate your structured data, visit the <a href="https://validator.schema.org/" target="_blank">Schema.org Validator</a>.</p>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
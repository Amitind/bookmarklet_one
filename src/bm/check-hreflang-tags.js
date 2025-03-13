javascript:(function(){
    const hreflangTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
    const currentUrl = window.location.href;
    
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
        <h2 style="margin-top: 0;">Hreflang Tags Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${hreflangTags.length > 0 ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${hreflangTags.length > 0 ? '#4CAF50' : '#ff4444'}">
                ${hreflangTags.length > 0 ? 'Hreflang tags found' : 'No hreflang tags found'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Current Page</h3>
            <p style="margin: 0;">${currentUrl}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Hreflang Tags</h3>
            ${hreflangTags.length > 0 ? 
                `<div style="margin: 0;">
                    ${Array.from(hreflangTags).map(tag => `
                        <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                            <strong>${tag.hreflang}:</strong> <a href="${tag.href}" target="_blank">${tag.href}</a>
                        </div>
                    `).join('')}
                </div>` : 
                '<p style="margin: 0;">No hreflang tags found in the document.</p>'
            }
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Validation</h3>
            <p style="margin: 0;">To validate your hreflang implementation, visit the <a href="https://www.google.com/webmasters/tools/international-targeting" target="_blank">Google Search Console International Targeting Tool</a>.</p>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
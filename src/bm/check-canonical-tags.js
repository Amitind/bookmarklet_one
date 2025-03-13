javascript:(function(){
    const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
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
        <h2 style="margin-top: 0;">Canonical Tags Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${canonicalTags.length > 0 ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${canonicalTags.length > 0 ? '#4CAF50' : '#ff4444'}">
                ${canonicalTags.length > 0 ? 'Canonical tag(s) found' : 'No canonical tag found'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Canonical URLs</h3>
            ${canonicalTags.length > 0 ? 
                `<ul style="margin: 0; padding-left: 20px;">
                    ${Array.from(canonicalTags).map(tag => 
                        `<li style="margin-bottom: 5px;">
                            <a href="${tag.href}" target="_blank">${tag.href}</a>
                        </li>`
                    ).join('')}
                </ul>` : 
                '<p style="margin: 0;">No canonical tags found in the document.</p>'
            }
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Current Page URL</h3>
            <p style="margin: 0;">${window.location.href}</p>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
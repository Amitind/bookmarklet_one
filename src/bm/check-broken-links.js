javascript:(function(){
    const links = document.querySelectorAll('a[href]');
    const currentDomain = window.location.hostname;
    const internalLinks = [];
    const externalLinks = [];
    
    links.forEach(link => {
        const href = link.href;
        if (href.startsWith('http')) {
            try {
                const url = new URL(href);
                if (url.hostname === currentDomain) {
                    internalLinks.push({
                        url: href,
                        text: link.textContent.trim(),
                        element: link
                    });
                } else {
                    externalLinks.push({
                        url: href,
                        text: link.textContent.trim(),
                        element: link
                    });
                }
            } catch (e) {
                console.error('Invalid URL:', href);
            }
        }
    });
    
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
        <h2 style="margin-top: 0;">Link Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Summary</h3>
            <p style="margin: 0;">Total links found: ${links.length}</p>
            <p style="margin: 5px 0 0 0;">Internal links: ${internalLinks.length}</p>
            <p style="margin: 5px 0 0 0;">External links: ${externalLinks.length}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Internal Links</h3>
            <div style="margin: 0; max-height: 200px; overflow-y: auto;">
                ${internalLinks.map(link => `
                    <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <a href="${link.url}" target="_blank" style="text-decoration: none; color: #333;">
                            <strong>${link.text || 'No text'}</strong>
                            <p style="margin: 5px 0 0 0; font-size: 0.9em;">${link.url}</p>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">External Links</h3>
            <div style="margin: 0; max-height: 200px; overflow-y: auto;">
                ${externalLinks.map(link => `
                    <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <a href="${link.url}" target="_blank" style="text-decoration: none; color: #333;">
                            <strong>${link.text || 'No text'}</strong>
                            <p style="margin: 5px 0 0 0; font-size: 0.9em;">${link.url}</p>
                        </a>
                    </div>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Validation</h3>
            <p style="margin: 0;">To check for broken links, use a tool like <a href="https://www.deadlinkchecker.com/" target="_blank">Dead Link Checker</a> or <a href="https://www.ahrefs.com/broken-link-checker" target="_blank">Ahrefs Broken Link Checker</a>.</p>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
javascript:(function(){
    const url = new URL(window.location.href);
    const sitemapUrls = [
        `${url.protocol}//${url.hostname}/sitemap.xml`,
        `${url.protocol}//${url.hostname}/sitemap-index.xml`
    ];
    
    Promise.all(sitemapUrls.map(sitemapUrl => 
        fetch(sitemapUrl)
            .then(response => ({
                url: sitemapUrl,
                status: response.ok,
                statusCode: response.status
            }))
            .catch(() => ({
                url: sitemapUrl,
                status: false,
                statusCode: 404
            }))
    )).then(results => {
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
        const sitemapsFound = results.filter(r => r.status).length;
        
        content.innerHTML = `
            <h2 style="margin-top: 0;">XML Sitemap Analysis</h2>
            <div style="margin-bottom: 20px;">
                <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
            </div>
            <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${sitemapsFound ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
                <h3 style="margin: 0 0 10px 0;">Status</h3>
                <p style="margin: 0; color: ${sitemapsFound ? '#4CAF50' : '#ff4444'}">
                    ${sitemapsFound ? `Found ${sitemapsFound} sitemap file(s)` : 'No sitemap files found'}
                </p>
            </div>
            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0;">Sitemap Locations Checked</h3>
                ${results.map(result => `
                    <div style="margin: 10px 0;">
                        <p style="margin: 0;">
                            <span style="color: ${result.status ? '#4CAF50' : '#ff4444'}">●</span>
                            <a href="${result.url}" target="_blank">${result.url}</a>
                            (Status: ${result.statusCode})
                        </p>
                    </div>
                `).join('')}
            </div>
        `;
        
        popup.classList.add('seo-popup');
        popup.appendChild(content);
        document.body.appendChild(popup);
    });
})();
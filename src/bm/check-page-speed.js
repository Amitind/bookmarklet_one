javascript:(function(){
    const url = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    const hostname = new URL(url).hostname;
    
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
        <h2 style="margin-top: 0;">Page Speed Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Current Page</h3>
            <p style="margin: 0;">${url}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Page Speed Tools</h3>
            <div style="margin: 0;">
                <div style="margin-bottom: 10px;">
                    <a href="https://pagespeed.web.dev/report?url=${encodedUrl}" target="_blank" style="display: block; padding: 10px; background: #f5f5f5; border-radius: 4px; text-decoration: none; color: #333;">
                        <strong>Google PageSpeed Insights</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9em;">Analyze page performance and get optimization suggestions</p>
                    </a>
                </div>
                <div style="margin-bottom: 10px;">
                    <a href="https://www.webpagetest.org/?url=${encodedUrl}" target="_blank" style="display: block; padding: 10px; background: #f5f5f5; border-radius: 4px; text-decoration: none; color: #333;">
                        <strong>WebPageTest</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9em;">Detailed performance analysis from multiple locations</p>
                    </a>
                </div>
                <div style="margin-bottom: 10px;">
                    <a href="https://gtmetrix.com/?url=${encodedUrl}" target="_blank" style="display: block; padding: 10px; background: #f5f5f5; border-radius: 4px; text-decoration: none; color: #333;">
                        <strong>GTmetrix</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9em;">Page speed and performance optimization analysis</p>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})();
javascript:(function(){
    const url = new URL(window.location.href);
    
    fetch(url.href)
        .then(response => {
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
            const isSecure = url.protocol === 'https:';
            
            content.innerHTML = `
                <h2 style="margin-top: 0;">SSL Certificate Analysis</h2>
                <div style="margin-bottom: 20px;">
                    <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
                </div>
                <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${isSecure ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
                    <h3 style="margin: 0 0 10px 0;">Status</h3>
                    <p style="margin: 0; color: ${isSecure ? '#4CAF50' : '#ff4444'}">
                        ${isSecure ? 'SSL Certificate is active' : 'No SSL Certificate found'}
                    </p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Current URL</h3>
                    <p style="margin: 0;">${url.href}</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Protocol</h3>
                    <p style="margin: 0;">${url.protocol.replace(':', '')}</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Hostname</h3>
                    <p style="margin: 0;">${url.hostname}</p>
                </div>
                ${!isSecure ? `
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Secure Version</h3>
                    <p style="margin: 0;">
                        <a href="https://${url.hostname}${url.pathname}${url.search}" target="_blank">
                            https://${url.hostname}${url.pathname}${url.search}
                        </a>
                    </p>
                </div>
                ` : ''}
            `;
            
            popup.classList.add('seo-popup');
            popup.appendChild(content);
            document.body.appendChild(popup);
        })
        .catch(error => {
            console.error('Error checking SSL certificate:', error);
        });
})();
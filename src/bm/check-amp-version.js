javascript:(function(){
    const currentUrl = window.location.href;
    const ampUrl = currentUrl.includes('?') ? 
        currentUrl + '&amp=1' : 
        currentUrl + '?amp=1';
    
    fetch(ampUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No AMP URL found');
            }
            return response.text();
        })
        .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const isAmp = doc.querySelector('html[amp]') !== null;
            
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
                <h2 style="margin-top: 0;">AMP Version Analysis</h2>
                <div style="margin-bottom: 20px;">
                    <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
                </div>
                <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${isAmp ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
                    <h3 style="margin: 0 0 10px 0;">Status</h3>
                    <p style="margin: 0; color: ${isAmp ? '#4CAF50' : '#ff4444'}">
                        ${isAmp ? 'AMP URL found' : 'No AMP URL found'}
                    </p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Current Page</h3>
                    <p style="margin: 0;">${currentUrl}</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">AMP URL</h3>
                    <p style="margin: 0;"><a href="${ampUrl}" target="_blank">${ampUrl}</a></p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Validation</h3>
                    <p style="margin: 0;">To validate your AMP page, visit the <a href="https://validator.ampproject.org/" target="_blank">AMP Validator</a>.</p>
                </div>
            `;
            
            popup.classList.add('seo-popup');
            popup.appendChild(content);
            document.body.appendChild(popup);
        })
        .catch(error => {
            alert('Error checking AMP version: ' + error.message);
        });
})();
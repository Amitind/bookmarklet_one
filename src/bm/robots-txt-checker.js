javascript:(function(){
    const url = new URL(window.location.href);
    const robotsUrl = `${url.protocol}//${url.hostname}/robots.txt`;
    
    fetch(robotsUrl)
        .then(response => response.text())
        .then(text => {
            const rules = text.split('\n').filter(line => line.trim() && !line.startsWith('#'));
            const userAgents = rules.filter(line => line.toLowerCase().startsWith('user-agent:'));
            const disallowRules = rules.filter(line => line.toLowerCase().startsWith('disallow:'));
            const allowRules = rules.filter(line => line.toLowerCase().startsWith('allow:'));
            
            const currentPath = url.pathname;
            const isDisallowed = disallowRules.some(rule => {
                const pattern = rule.toLowerCase().replace('disallow:', '').trim();
                return currentPath.startsWith(pattern);
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
                <h2 style="margin-top: 0;">Robots.txt Analysis</h2>
                <div style="margin-bottom: 20px;">
                    <button onclick="this.parentElement.parentElement.remove()" style="float: right;">Close</button>
                </div>
                <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${isDisallowed ? '#ff4444' : '#4CAF50'}; border-radius: 4px;">
                    <h3 style="margin: 0 0 10px 0;">Current Page Status</h3>
                    <p style="margin: 0; color: ${isDisallowed ? '#ff4444' : '#4CAF50'}">
                        ${isDisallowed ? 'This page is disallowed in robots.txt' : 'This page is allowed in robots.txt'}
                    </p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0;">Robots.txt Rules</h3>
                    <pre style="margin: 0; white-space: pre-wrap;">${text}</pre>
                </div>
            `;
            
            popup.appendChild(content);
            document.body.appendChild(popup);
        })
        .catch(error => {
            alert('Error fetching robots.txt: ' + error.message);
        });
})(); 
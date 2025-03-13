javascript:(function(){
    const storage = {
        localStorage: {},
        sessionStorage: {}
    };

    // Get localStorage items
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
            storage.localStorage[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
            storage.localStorage[key] = localStorage.getItem(key);
        }
    }

    // Get sessionStorage items
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        try {
            storage.sessionStorage[key] = JSON.parse(sessionStorage.getItem(key));
        } catch (e) {
            storage.sessionStorage[key] = sessionStorage.getItem(key);
        }
    }

    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 600px;
        max-height: 80vh;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10000;
        overflow-y: auto;
    `;

    popup.innerHTML = `
        <div style="margin-bottom: 15px;">
            <strong>Local Storage Explorer</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 20px;">
            <strong>Summary:</strong><br>
            Local Storage Items: ${Object.keys(storage.localStorage).length}<br>
            Session Storage Items: ${Object.keys(storage.sessionStorage).length}
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Local Storage</h3>
            ${Object.keys(storage.localStorage).length > 0 ? `
                ${Object.entries(storage.localStorage).map(([key, value]) => `
                    <div style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <div style="margin-bottom: 5px;">
                            <strong>Key:</strong> ${key}
                        </div>
                        <div style="margin-bottom: 5px;">
                            <strong>Value:</strong>
                            <pre style="margin: 5px 0 0 0; white-space: pre-wrap; word-break: break-all;">${JSON.stringify(value, null, 2)}</pre>
                        </div>
                    </div>
                `).join('')}
            ` : '<div style="color: #666;">No items in Local Storage</div>'}
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Session Storage</h3>
            ${Object.keys(storage.sessionStorage).length > 0 ? `
                ${Object.entries(storage.sessionStorage).map(([key, value]) => `
                    <div style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <div style="margin-bottom: 5px;">
                            <strong>Key:</strong> ${key}
                        </div>
                        <div style="margin-bottom: 5px;">
                            <strong>Value:</strong>
                            <pre style="margin: 5px 0 0 0; white-space: pre-wrap; word-break: break-all;">${JSON.stringify(value, null, 2)}</pre>
                        </div>
                    </div>
                `).join('')}
            ` : '<div style="color: #666;">No items in Session Storage</div>'}
        </div>
    `;

    document.body.appendChild(popup);
})(); 
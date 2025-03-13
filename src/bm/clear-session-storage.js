javascript:(function(){
    // Create popup
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        min-width: 300px;
    `;

    // Get current domain
    const domain = window.location.hostname;

    // Get storage items count
    const itemCount = sessionStorage.length;

    // Create content
    popup.innerHTML = `
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Clear Session Storage</h3>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p style="margin: 0 0 10px 0;">Domain: <strong>${domain}</strong></p>
            <p style="margin: 0;">Items to clear: <strong>${itemCount}</strong></p>
        </div>
        <div style="margin-bottom: 15px;">
            <button onclick="window.clearStorage()" 
                    style="width: 100%; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Clear All Session Storage Data
            </button>
        </div>
        <div style="font-size: 12px; color: #666;">
            Warning: This action cannot be undone. All session storage data for this domain will be permanently deleted.
        </div>
    `;

    // Add clear function to window
    window.clearStorage = function() {
        try {
            sessionStorage.clear();
            popup.innerHTML = `
                <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0;">Session Storage Cleared</h3>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0;">All session storage data for <strong>${domain}</strong> has been cleared successfully.</p>
                </div>
                <div style="font-size: 12px; color: #666;">
                    You can now close this popup.
                </div>
            `;
        } catch (error) {
            popup.innerHTML = `
                <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0;">Error</h3>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; color: #dc3545;">Failed to clear session storage:</p>
                    <p style="margin: 5px 0 0 0; font-size: 12px;">${error.message}</p>
                </div>
            `;
        }
    };

    // Add popup to page
    document.body.appendChild(popup);
})(); 
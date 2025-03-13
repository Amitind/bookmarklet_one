javascript:(function(){
    // Function to get all cookies
    function getAllCookies() {
        const cookies = document.cookie.split(';');
        return cookies.map(cookie => {
            const [name, value] = cookie.trim().split('=');
            return {
                name: decodeURIComponent(name),
                value: decodeURIComponent(value || ''),
                domain: window.location.hostname,
                path: '/',
                expires: getCookieExpiration(name)
            };
        });
    }

    // Function to get cookie expiration
    function getCookieExpiration(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            if (cookie.trim().startsWith(name + '=')) {
                const match = cookie.match(/expires=([^;]+)/);
                if (match) {
                    return new Date(match[1]).toLocaleString();
                }
            }
        }
        return 'Session Cookie';
    }

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
        min-width: 400px;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
    `;

    // Get cookies
    const cookies = getAllCookies();

    // Create content
    popup.innerHTML = `
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Cookie Inspector</h3>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p style="margin: 0;">Domain: <strong>${window.location.hostname}</strong></p>
            <p style="margin: 5px 0 0 0;">Total Cookies: <strong>${cookies.length}</strong></p>
        </div>
        <div style="margin-bottom: 15px;">
            <input type="text" id="cookieSearch" 
                   placeholder="Search cookies..." 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 10px;">
        </div>
        <div id="cookieList" style="max-height: 400px; overflow-y: auto;">
            ${cookies.map(cookie => `
                <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                    <div style="margin-bottom: 5px;">
                        <strong>Name:</strong> ${cookie.name}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Value:</strong> ${cookie.value.length > 50 ? cookie.value.substring(0, 50) + '...' : cookie.value}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Domain:</strong> ${cookie.domain}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Path:</strong> ${cookie.path}
                    </div>
                    <div>
                        <strong>Expires:</strong> ${cookie.expires}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add search functionality
    const searchInput = popup.querySelector('#cookieSearch');
    const cookieList = popup.querySelector('#cookieList');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cookieElements = cookieList.children;

        Array.from(cookieElements).forEach(element => {
            const text = element.textContent.toLowerCase();
            element.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Add popup to page
    document.body.appendChild(popup);
})(); 
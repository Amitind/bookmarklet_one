javascript:(function(){
    const grids = document.querySelectorAll('[style*="display: grid"]');
    
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10000;
    `;
    
    popup.innerHTML = `
        <div style="margin-bottom: 10px;">
            <strong>CSS Grid Elements Found: ${grids.length}</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="color: ${grids.length ? '#4CAF50' : '#ff4444'}">
            ${grids.length ? 'Grid elements detected and highlighted' : 'No grid elements found on page'}
        </div>
    `;
    
    document.body.appendChild(popup);

    grids.forEach(grid => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 255, 0, 0.2);
            pointer-events: none;
            z-index: 9999;
        `;
        grid.style.position = 'relative';
        grid.appendChild(overlay);
    });
})();
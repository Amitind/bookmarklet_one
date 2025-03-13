javascript:(function(){
    let isToggling = false;
    let overlay = null;
    let infoBox = null;
    let toggledElements = new Set();

    // Create overlay
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.1);
            z-index: 10000;
            cursor: pointer;
            pointer-events: none;
        `;
        document.body.appendChild(overlay);
    }

    // Create info box
    function createInfoBox() {
        infoBox = document.createElement('div');
        infoBox.style.cssText = `
            position: fixed;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 10001;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: none;
            min-width: 200px;
            pointer-events: auto;
        `;
        document.body.appendChild(infoBox);
    }

    // Function to get element path
    function getElementPath(element) {
        const path = [];
        while (element && element.nodeType === Node.ELEMENT_NODE) {
            let selector = element.nodeName.toLowerCase();
            if (element.id) {
                selector += `#${element.id}`;
            } else if (element.className) {
                selector += `.${element.className.split(' ').join('.')}`;
            }
            path.unshift(selector);
            element = element.parentNode;
        }
        return path.join(' > ');
    }

    // Function to toggle element visibility
    function toggleElementVisibility(element) {
        const isVisible = element.style.display !== 'none';
        const originalDisplay = element.style.display;
        
        if (isVisible) {
            element.style.display = 'none';
            toggledElements.add({
                element: element,
                originalDisplay: originalDisplay
            });
        } else {
            element.style.display = originalDisplay || 'block';
            toggledElements.delete(element);
        }
        
        updateInfoBox();
    }

    // Function to update info box
    function updateInfoBox() {
        if (!infoBox) return;
        
        infoBox.innerHTML = `
            <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                <strong>Toggle Element Visibility</strong>
                <button onclick="this.closest('div').parentElement.remove()" style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
            </div>
            <div style="margin-bottom: 10px;">
                <button onclick="window.restoreAll()" 
                        style="width: 100%; padding: 8px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Restore All Elements
                </button>
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Hidden Elements (${toggledElements.size}):</strong>
            </div>
            <div style="max-height: 300px; overflow-y: auto;">
                ${Array.from(toggledElements).map(item => `
                    <div style="margin-bottom: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px;">
                        <div style="margin-bottom: 4px;">
                            <strong>Element:</strong> ${getElementPath(item.element)}
                        </div>
                        <div style="font-size: 12px; color: #666;">
                            Original Display: ${item.originalDisplay || 'block'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Function to handle click
    function handleClick(e) {
        if (!isToggling) return;
        e.preventDefault();
        e.stopPropagation();
        
        const element = e.target;
        if (element === overlay || element === infoBox || element === controlPanel) return;
        
        toggleElementVisibility(element);
    }

    // Create control panel
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10002;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        pointer-events: auto;
    `;

    controlPanel.innerHTML = `
        <div style="margin-bottom: 10px;">
            <strong>Toggle Element Visibility</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 10px;">
            <button onclick="window.startToggling()" 
                    style="width: 100%; padding: 8px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Start Toggling
            </button>
        </div>
        <div style="font-size: 12px; color: #666;">
            Click any element to toggle its visibility
        </div>
    `;

    // Make functions globally accessible
    window.startToggling = function() {
        if (isToggling) return;
        
        isToggling = true;
        createOverlay();
        createInfoBox();
        updateInfoBox();
        
        document.addEventListener('click', handleClick);
    };

    window.restoreAll = function() {
        toggledElements.forEach(item => {
            item.element.style.display = item.originalDisplay || 'block';
        });
        toggledElements.clear();
        updateInfoBox();
    };

    document.body.appendChild(controlPanel);
})(); 
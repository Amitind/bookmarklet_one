javascript:(function(){
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.95);
        color: white;
        padding: 16px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 10000;
        pointer-events: none;
        display: none;
        max-width: 400px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    document.body.appendChild(tooltip);

    let isActive = true;

    // Function to completely stop and remove the inspector
    window.stopInspector = function() {
        // Remove event listeners
        document.removeEventListener('mouseover', showTooltip);
        document.removeEventListener('mouseout', hideTooltip);
        
        // Remove UI elements
        tooltip.remove();
        controlPanel.remove();
    };

    // Get only the meaningful styles that differ from default
    function getImportantStyles(element, className) {
        const styles = window.getComputedStyle(element);
        const important = {};
        
        // Key visual and layout properties to check
        const keyProps = [
            'display', 'position', 'flex', 'grid',
            'margin', 'padding', 'width', 'height',
            'color', 'background', 'border',
            'font-size', 'font-weight',
            'transform', 'animation',
            'box-shadow', 'opacity',
            'z-index', 'overflow'
        ];

        // Get default styles from same element type
        const defaultEl = document.createElement(element.tagName);
        document.body.appendChild(defaultEl);
        const defaultStyles = window.getComputedStyle(defaultEl);
        document.body.removeChild(defaultEl);

        // Only include styles that differ from default
        keyProps.forEach(prop => {
            const value = styles.getPropertyValue(prop);
            const defaultValue = defaultStyles.getPropertyValue(prop);
            if (value !== defaultValue) {
                important[prop] = value;
            }
        });

        return important;
    }

    function showTooltip(e) {
        if (!isActive) return;
        
        const element = e.target;
        const classes = element.className;
        
        if (!classes) return;
        
        const classList = classes.split(' ');
        const styles = {};
        
        classList.forEach(className => {
            styles[className] = getImportantStyles(element, className);
        });

        // Only show classes with meaningful styles
        const meaningfulClasses = classList.filter(c => Object.keys(styles[c]).length > 0);
        
        if (meaningfulClasses.length === 0) return;

        const tooltipContent = `
            <div style="margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                <div style="color: #66BB6A; font-weight: 500; margin-bottom: 4px;">
                    Element: ${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}
                </div>
                <div style="color: #B0BEC5; font-size: 12px;">
                    Hover over classes below to see their styles
                </div>
            </div>
            ${meaningfulClasses.map(className => `
                <div style="margin-bottom: 16px; cursor: pointer;" 
                     onmouseover="this.style.background='rgba(255,255,255,0.1)'" 
                     onmouseout="this.style.background='transparent'">
                    <div style="color: #42A5F5; font-weight: 500; margin-bottom: 6px;">
                        .${className}
                    </div>
                    <div style="color: #E0E0E0; font-family: 'SF Mono', 'Consolas', monospace; font-size: 12px; line-height: 1.5;">
                        ${Object.entries(styles[className])
                            .map(([prop, value]) => `<span style="color: #FFB74D;">${prop}</span>: ${value};`)
                            .join('<br>')}
                    </div>
                </div>
            `).join('')}
        `;
        
        tooltip.innerHTML = tooltipContent;
        tooltip.style.display = 'block';
        
        // Smart positioning
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Position left or right depending on space
        if (rect.right + tooltip.offsetWidth + 20 > viewportWidth) {
            tooltip.style.right = `${viewportWidth - rect.left + 10}px`;
            tooltip.style.left = 'auto';
        } else {
            tooltip.style.left = `${rect.right + 10}px`;
            tooltip.style.right = 'auto';
        }
        
        // Position top or bottom depending on space
        if (rect.top + tooltip.offsetHeight + 20 > viewportHeight) {
            tooltip.style.bottom = `${viewportHeight - rect.top + 10}px`;
            tooltip.style.top = 'auto';
        } else {
            tooltip.style.top = `${rect.top}px`;
            tooltip.style.bottom = 'auto';
        }
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    document.addEventListener('mouseover', showTooltip);
    document.addEventListener('mouseout', hideTooltip);

    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 10001;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    controlPanel.innerHTML = `
        <div style="margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="font-weight: 500; color: #333; margin-bottom: 4px;">CSS Class Inspector</div>
                <div style="font-size: 12px; color: #666;">Hover over elements to inspect their classes</div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; font-size: 20px; cursor: pointer; color: #666; padding: 0 4px;">
                ×
            </button>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px;">
            <input type="checkbox" ${isActive ? 'checked' : ''} 
                   onchange="this.isActive = this.checked"
                   style="width: 16px; height: 16px;">
            <label style="color: #333; font-size: 14px;">Enable Class Inspection</label>
        </div>
        <div style="margin-top: 12px; font-size: 12px; color: #666; line-height: 1.4;">
            <div style="margin-bottom: 4px;">• Shows only styles that differ from default</div>
            <div style="margin-bottom: 4px;">• Hover over classes to highlight their styles</div>
            <div style="margin-bottom: 8px;">• Click the × to close this panel</div>
            <button onclick="window.stopInspector()" 
                    style="width: 100%; padding: 8px; background: #ff4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500;">
                Stop Inspector
            </button>
        </div>
    `;
    document.body.appendChild(controlPanel);
})();
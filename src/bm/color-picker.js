javascript:(function(){
    let isActive = false;
    let overlay = null;
    let infoBox = null;

    // Function to convert RGB to HSL
    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [
            Math.round(h * 360),
            Math.round(s * 100),
            Math.round(l * 100)
        ];
    }

    // Function to get computed color
    function getComputedColor(element, property) {
        const color = window.getComputedStyle(element)[property];
        const temp = document.createElement('div');
        temp.style.color = color;
        document.body.appendChild(temp);
        const rgb = window.getComputedStyle(temp).color;
        document.body.removeChild(temp);
        return rgb;
    }

    // Function to format color values
    function formatColor(color, format) {
        const rgb = color.match(/\d+/g).map(Number);
        const hex = '#' + rgb.map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
        const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);

        switch (format) {
            case 'hex': return hex;
            case 'rgb': return `rgb(${rgb.join(', ')})`;
            case 'hsl': return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
            default: return hex;
        }
    }

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
            cursor: crosshair;
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

    // Function to handle mouse move
    function handleMouseMove(e) {
        if (!isActive) return;
        e.preventDefault();
        e.stopPropagation();

        const element = e.target;
        if (element === overlay || element === infoBox || element === controlPanel) return;

        const backgroundColor = getComputedColor(element, 'backgroundColor');
        const textColor = getComputedColor(element, 'color');

        infoBox.style.display = 'block';
        infoBox.style.left = (e.pageX + 10) + 'px';
        infoBox.style.top = (e.pageY + 10) + 'px';

        infoBox.innerHTML = `
            <div style="margin-bottom: 10px;">
                <strong>Background Color:</strong>
                <div style="margin-top: 5px;">
                    <div style="display: inline-block; width: 20px; height: 20px; background: ${backgroundColor}; border: 1px solid #ddd;"></div>
                    <div style="margin-top: 5px;">
                        <div>HEX: ${formatColor(backgroundColor, 'hex')}</div>
                        <div>RGB: ${formatColor(backgroundColor, 'rgb')}</div>
                        <div>HSL: ${formatColor(backgroundColor, 'hsl')}</div>
                    </div>
                </div>
            </div>
            <div>
                <strong>Text Color:</strong>
                <div style="margin-top: 5px;">
                    <div style="display: inline-block; width: 20px; height: 20px; background: ${textColor}; border: 1px solid #ddd;"></div>
                    <div style="margin-top: 5px;">
                        <div>HEX: ${formatColor(textColor, 'hex')}</div>
                        <div>RGB: ${formatColor(textColor, 'rgb')}</div>
                        <div>HSL: ${formatColor(textColor, 'hsl')}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to stop color picker
    function stopPicking() {
        isActive = false;
        document.removeEventListener('mousemove', handleMouseMove);
        if (overlay) {
            overlay.remove();
            overlay = null;
        }
        if (infoBox) {
            infoBox.remove();
            infoBox = null;
        }
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
            <strong>Color Picker</strong>
            <button onclick="window.stopPicking(); this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 10px;">
            <button onclick="window.startPicking()" 
                    style="width: 100%; padding: 8px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Start Picking Colors
            </button>
        </div>
        <div style="font-size: 12px; color: #666;">
            Hover over any element to see its colors
        </div>
    `;

    // Make functions globally accessible
    window.startPicking = function() {
        if (isActive) return;
        
        isActive = true;
        createOverlay();
        createInfoBox();
        
        document.addEventListener('mousemove', handleMouseMove);
    };

    window.stopPicking = stopPicking;

    document.body.appendChild(controlPanel);
})(); 
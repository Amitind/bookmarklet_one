javascript:(function(){
    // Function to get RGB values from a color string
    function getRGB(color) {
        const temp = document.createElement('div');
        temp.style.color = color;
        document.body.appendChild(temp);
        const rgb = window.getComputedStyle(temp).color;
        document.body.removeChild(temp);
        return rgb;
    }

    // Function to convert RGB to HEX
    function rgbToHex(rgb) {
        const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!match) return null;
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    // Function to get color frequency
    function getColorFrequency(elements) {
        const colors = new Map();
        
        Array.from(elements).forEach(element => {
            const style = window.getComputedStyle(element);
            const color = style.color;
            const backgroundColor = style.backgroundColor;
            
            if (color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)') {
                colors.set(color, (colors.get(color) || 0) + 1);
            }
            
            if (backgroundColor && backgroundColor !== 'transparent' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
                colors.set(backgroundColor, (colors.get(backgroundColor) || 0) + 1);
            }
        });
        
        return colors;
    }

    // Get all elements
    const elements = document.getElementsByTagName('*');
    const colorFrequency = getColorFrequency(elements);

    // Sort colors by frequency
    const sortedColors = Array.from(colorFrequency.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20); // Get top 20 colors

    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
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
            <strong>Color Palette Extractor</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 20px;">
            <strong>Top Colors Found:</strong>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
            ${sortedColors.map(([color, frequency]) => {
                const hex = rgbToHex(color);
                return `
                    <div style="padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <div style="width: 100%; height: 40px; background: ${color}; margin-bottom: 5px; border-radius: 4px;"></div>
                        <div style="font-size: 12px;">
                            <strong>RGB:</strong> ${color}<br>
                            <strong>HEX:</strong> ${hex}<br>
                            <strong>Frequency:</strong> ${frequency}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    document.body.appendChild(popup);
})(); 
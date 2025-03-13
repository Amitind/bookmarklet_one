javascript:(function(){
    // Create popup container
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
        font-family: system-ui, sans-serif;
        max-width: 350px;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        float: right;
        border: none;
        background: none;
        font-size: 20px;
        cursor: pointer;
        padding: 0 5px;
    `;
    closeBtn.onclick = () => {
        document.body.removeEventListener('mouseover', handleHover);
        document.body.removeEventListener('click', handleClick);
        popup.remove();
    };

    // Create content container
    const content = document.createElement('div');
    content.innerHTML = '<strong>Font Inspector</strong><br>Hover over text to inspect fonts';
    
    popup.appendChild(closeBtn);
    popup.appendChild(content);
    document.body.appendChild(popup);

    let currentElement = null;

    function getFontInfo(element) {
        const style = window.getComputedStyle(element);
        return {
            family: style.fontFamily,
            size: style.fontSize,
            weight: style.fontWeight,
            style: style.fontStyle,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
            color: style.color
        };
    }

    function handleHover(e) {
        if (e.target.innerText && e.target !== currentElement) {
            currentElement = e.target;
            const info = getFontInfo(e.target);
            content.innerHTML = `
                <strong>Font Inspector</strong><br>
                <div style="margin-top: 10px;">
                    <strong>Font Family:</strong> ${info.family}<br>
                    <strong>Size:</strong> ${info.size}<br>
                    <strong>Weight:</strong> ${info.weight}<br>
                    <strong>Style:</strong> ${info.style}<br>
                    <strong>Line Height:</strong> ${info.lineHeight}<br>
                    <strong>Letter Spacing:</strong> ${info.letterSpacing}<br>
                    <strong>Color:</strong> ${info.color}
                </div>
            `;
            
            // Highlight current element
            e.target.style.outline = '2px solid #4CAF50';
        }
    }

    function handleClick(e) {
        if (e.target.innerText) {
            e.preventDefault();
            const info = getFontInfo(e.target);
            console.log('Font Information:', info);
        }
    }

    document.body.addEventListener('mouseover', handleHover);
    document.body.addEventListener('click', handleClick);

    // Remove highlight when moving away
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.innerText) {
            e.target.style.outline = '';
        }
    });
})();
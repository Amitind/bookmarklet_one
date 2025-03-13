javascript:(function(){
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    const unusedRules = [];
    const usedRules = new Set();

    // Get all elements on the page
    const elements = document.getElementsByTagName('*');

    // Function to get computed styles for an element
    function getComputedStyles(element) {
        const computedStyle = window.getComputedStyle(element);
        const styles = {};
        for (let i = 0; i < computedStyle.length; i++) {
            const prop = computedStyle[i];
            styles[prop] = computedStyle.getPropertyValue(prop);
        }
        return styles;
    }

    // Function to check if a rule is used
    function isRuleUsed(rule) {
        for (const element of elements) {
            try {
                if (element.matches(rule.selectorText)) {
                    return true;
                }
            } catch (e) {
                // Skip invalid selectors
            }
        }
        return false;
    }

    // Process each stylesheet
    styles.forEach(style => {
        let rules;
        if (style.tagName === 'STYLE') {
            rules = Array.from(style.sheet?.cssRules || []);
        } else {
            try {
                rules = Array.from(style.sheet?.cssRules || []);
            } catch (e) {
                // Skip cross-origin stylesheets
                return;
            }
        }

        rules.forEach(rule => {
            if (rule instanceof CSSStyleRule && !isRuleUsed(rule)) {
                unusedRules.push({
                    selector: rule.selectorText,
                    styles: rule.style.cssText,
                    source: style.tagName === 'STYLE' ? 'Internal Stylesheet' : style.href
                });
            }
        });
    });

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
            <strong>Unused CSS Detector</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 20px;">
            <strong>Total Unused Rules Found: ${unusedRules.length}</strong>
        </div>
        <div style="margin-bottom: 20px;">
            ${unusedRules.map(rule => `
                <div style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                    <div style="margin-bottom: 5px;">
                        <strong>Selector:</strong> ${rule.selector}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Styles:</strong> ${rule.styles}
                    </div>
                    <div style="font-size: 0.9em; color: #666;">
                        <strong>Source:</strong> ${rule.source}
                    </div>
                </div>
            `).join('')}
        </div>
        ${unusedRules.length === 0 ? `
            <div style="color: #4CAF50;">
                No unused CSS rules found on this page.
            </div>
        ` : ''}
    `;

    document.body.appendChild(popup);
})(); 
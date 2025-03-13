javascript:(function(){
    const elements = document.getElementsByTagName('*');
    const eventListeners = [];

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

    // Function to get event listener details
    function getEventListenerDetails(element, eventType) {
        // Check if element has event listener using jQuery if available
        if (window.jQuery && element.jquery) {
            const events = jQuery._data(element, "events");
            if (events && events[eventType]) {
                return events[eventType].map(e => ({
                    type: eventType,
                    function: e.handler.toString(),
                    useCapture: false,
                    passive: false
                }));
            }
        }

        // Check inline event handlers
        const inlineHandler = element[`on${eventType}`];
        if (inlineHandler) {
            return [{
                type: eventType,
                function: inlineHandler.toString(),
                useCapture: false,
                passive: false
            }];
        }

        return [];
    }

    // Process each element
    for (const element of elements) {
        const commonEvents = ['click', 'submit', 'change', 'input', 'keyup', 'keydown', 'mouseover', 'mouseout', 'load', 'error'];
        
        commonEvents.forEach(eventType => {
            const listeners = getEventListenerDetails(element, eventType);
            if (listeners.length > 0) {
                eventListeners.push({
                    element: getElementPath(element),
                    tagName: element.tagName.toLowerCase(),
                    id: element.id || 'No ID',
                    classes: element.className || 'No classes',
                    listeners: listeners
                });
            }
        });
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
            <strong>Event Listener Viewer</strong>
            <button onclick="this.parentElement.parentElement.remove()" style="float:right;margin-left:10px;">×</button>
        </div>
        <div style="margin-bottom: 20px;">
            <strong>Total Elements with Event Listeners: ${eventListeners.length}</strong>
        </div>
        <div style="margin-bottom: 20px;">
            ${eventListeners.map(item => `
                <div style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                    <div style="margin-bottom: 5px;">
                        <strong>Element:</strong> ${item.element}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Tag:</strong> ${item.tagName}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>ID:</strong> ${item.id}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Classes:</strong> ${item.classes}
                    </div>
                    <div style="margin-bottom: 5px;">
                        <strong>Event Listeners:</strong>
                        ${item.listeners.map(listener => `
                            <div style="margin-left: 15px; margin-top: 5px;">
                                <div>Type: ${listener.type}</div>
                                <div>Function: ${listener.function}</div>
                                <div>Use Capture: ${listener.useCapture}</div>
                                <div>Passive: ${listener.passive}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        ${eventListeners.length === 0 ? `
            <div style="color: #4CAF50;">
                No event listeners found on this page.
            </div>
        ` : ''}
    `;

    document.body.appendChild(popup);
})();
javascript:(function(){
    // Function to count elements by tag name
    function countElements() {
        const elements = document.getElementsByTagName('*');
        const counts = {};
        const total = elements.length;

        // Count elements by tag name
        Array.from(elements).forEach(element => {
            const tagName = element.tagName.toLowerCase();
            counts[tagName] = (counts[tagName] || 0) + 1;
        });

        // Sort by count (descending)
        const sortedCounts = Object.entries(counts)
            .sort(([,a], [,b]) => b - a);

        return {
            total,
            counts: sortedCounts
        };
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
        min-width: 300px;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
    `;

    // Get element counts
    const { total, counts } = countElements();

    // Create content
    popup.innerHTML = `
        <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Element Counter</h3>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
        </div>
        <div style="margin-bottom: 15px;">
            <p style="margin: 0;">Total Elements: <strong>${total}</strong></p>
        </div>
        <div style="margin-bottom: 15px;">
            <input type="text" id="elementSearch" 
                   placeholder="Search elements..." 
                   style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 10px;">
        </div>
        <div id="elementList" style="max-height: 400px; overflow-y: auto;">
            ${counts.map(([tag, count]) => `
                <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <strong>${tag}</strong>
                        <span>${count}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add search functionality
    const searchInput = popup.querySelector('#elementSearch');
    const elementList = popup.querySelector('#elementList');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const elementElements = elementList.children;

        Array.from(elementElements).forEach(element => {
            const text = element.textContent.toLowerCase();
            element.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Add popup to page
    document.body.appendChild(popup);
})(); 
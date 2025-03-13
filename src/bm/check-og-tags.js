javascript:(function(){
    const ogTags = {
        title: document.querySelector('meta[property="og:title"]'),
        description: document.querySelector('meta[property="og:description"]'),
        image: document.querySelector('meta[property="og:image"]'),
        url: document.querySelector('meta[property="og:url"]'),
        type: document.querySelector('meta[property="og:type"]')
    };
    
    const hasAllTags = Object.values(ogTags).every(tag => tag !== null);
    
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 80%;
        max-width: 800px;
        max-height: 80vh;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        z-index: 10000;
        overflow-y: auto;
    `;
    
    const content = document.createElement('div');
    content.innerHTML = `
        <h2 style="margin-top: 0;">Open Graph Tags Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${hasAllTags ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${hasAllTags ? '#4CAF50' : '#ff4444'}">
                ${hasAllTags ? 'All essential Open Graph tags are present' : 'Some essential Open Graph tags are missing'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Open Graph Tags</h3>
            <div style="margin: 0;">
                ${Object.entries(ogTags).map(([key, tag]) => `
                    <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <strong>og:${key}:</strong> ${tag ? 
                            `<span style="color: #4CAF50">Present</span> - ${tag.content}` : 
                            '<span style="color: #ff4444">Missing</span>'}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
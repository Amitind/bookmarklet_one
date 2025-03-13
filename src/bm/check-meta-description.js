javascript:(function(){
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = metaDescription ? metaDescription.content : '';
    const descriptionLength = description.length;
    const isOptimal = descriptionLength >= 120 && descriptionLength <= 160;
    
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
        <h2 style="margin-top: 0;">Meta Description Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px; padding: 10px; border: 1px solid ${isOptimal ? '#4CAF50' : '#ff4444'}; border-radius: 4px;">
            <h3 style="margin: 0 0 10px 0;">Status</h3>
            <p style="margin: 0; color: ${isOptimal ? '#4CAF50' : '#ff4444'}">
                ${metaDescription ? 
                    (isOptimal ? 'Meta description length is optimal' : 
                    `Meta description is ${descriptionLength < 120 ? 'too short' : 'too long'}`) : 
                    'No meta description found'}
            </p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Meta Description</h3>
            ${metaDescription ? 
                `<p style="margin: 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">${description}</p>` : 
                '<p style="margin: 0;">No meta description found in the document.</p>'
            }
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Length Analysis</h3>
            <p style="margin: 0;">Current length: ${descriptionLength} characters</p>
            <p style="margin: 5px 0 0 0;">Optimal length: 120-160 characters</p>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
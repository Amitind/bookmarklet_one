javascript:(function(){
    const images = document.querySelectorAll('img');
    const analysis = {
        total: images.length,
        withAlt: 0,
        withDimensions: 0,
        lazyLoaded: 0,
        details: []
    };
    
    images.forEach(img => {
        const hasAlt = img.hasAttribute('alt') && img.alt.trim() !== '';
        const hasWidth = img.hasAttribute('width');
        const hasHeight = img.hasAttribute('height');
        const isLazy = img.hasAttribute('loading') && img.loading === 'lazy';
        
        if (hasAlt) analysis.withAlt++;
        if (hasWidth && hasHeight) analysis.withDimensions++;
        if (isLazy) analysis.lazyLoaded++;
        
        analysis.details.push({
            src: img.src,
            alt: img.alt,
            width: img.width,
            height: img.height,
            hasAlt,
            hasDimensions: hasWidth && hasHeight,
            isLazy
        });
    });
    
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
        <h2 style="margin-top: 0;">Image Optimization Analysis</h2>
        <div style="margin-bottom: 20px;">
            <button onclick="this.closest('.seo-popup').remove()" style="float: right;">Close</button>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Summary</h3>
            <p style="margin: 0;">Total images: ${analysis.total}</p>
            <p style="margin: 5px 0 0 0;">Images with alt text: ${analysis.withAlt}</p>
            <p style="margin: 5px 0 0 0;">Images with dimensions: ${analysis.withDimensions}</p>
            <p style="margin: 5px 0 0 0;">Lazy-loaded images: ${analysis.lazyLoaded}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Image Details</h3>
            <div style="margin: 0; max-height: 300px; overflow-y: auto;">
                ${analysis.details.map(img => `
                    <div style="margin-bottom: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
                        <p style="margin: 0;"><strong>Source:</strong> ${img.src}</p>
                        <p style="margin: 5px 0 0 0;"><strong>Alt text:</strong> ${img.alt || 'None'}</p>
                        <p style="margin: 5px 0 0 0;"><strong>Dimensions:</strong> ${img.width}x${img.height}</p>
                        <p style="margin: 5px 0 0 0;">
                            <strong>Status:</strong>
                            ${img.hasAlt ? '✓ Alt text' : '✗ No alt text'}
                            ${img.hasDimensions ? ' ✓ Dimensions' : ' ✗ No dimensions'}
                            ${img.isLazy ? ' ✓ Lazy loaded' : ' ✗ Not lazy loaded'}
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Optimization Tips</h3>
            <ul style="margin: 0; padding-left: 20px;">
                <li>Add descriptive alt text to all images</li>
                <li>Specify width and height attributes to prevent layout shifts</li>
                <li>Use lazy loading for images below the fold</li>
                <li>Optimize image file sizes and use appropriate formats (WebP, AVIF)</li>
                <li>Consider using responsive images with srcset and sizes attributes</li>
            </ul>
        </div>
    `;
    
    popup.classList.add('seo-popup');
    popup.appendChild(content);
    document.body.appendChild(popup);
})(); 
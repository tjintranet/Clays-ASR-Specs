let booksData = [];

// Cover specification data - from the Clays Specification Code Decoder
const specData = {
    product: {
        'C': 'Cover',
        'W': 'Cover with Flaps',
        'J': 'Jacket',
        'T': 'Tip-In',
        'F': 'Cover For Case'
    },
    
    colours: {
        '0': 'No Colour Print',
        '1': '1 Spot Colour',
        '2': '2 Spot Colours',
        '3': '3 Spot Colours',
        '4': '4 Process Colours',
        '5': '4 Process Colours + 1 Spot Colour',
        '6': '4 Process Colours + 2 Spot Colours',
        '7': '4 Spot Colours',
        '8': '4 Process Colours + 3 Spot Colours',
        '9': '4 Process Colours + 4 Spot Colours'
    },
    
    finish: {
        '0': 'No Finish',
        '1': 'Gloss Varnish In Line',
        '2': 'Gloss Varnish In Line + Matt Varnish Offline',
        '3': 'Gloss Varnish Off Line',
        '4': 'Matt Varnish Off Line',
        '5': 'Gloss Laminate (Standard)',
        '6': 'Matt Laminate (Standard)',
        '7': 'Matt Laminate (Standard) / Gloss Spot Varnish',
        '8': 'Silk Laminate',
        '9': 'Anti-Scuff Laminate',
        'A': 'Gloss Laminate (Standard) / Matt Spot UV (In house spot varnish route)',
        'B': 'Silk Laminate / Matt Spot UV',
        'C': 'Anti-Scuff Laminate / Gloss Spot UV',
        'D': 'Gloss Varnish Off Line + Matt Spot UV',
        'E': 'Matt Varnish In Line + Gloss Spot UV',
        'F': 'Matt Varnish In Line',
        'G': 'Matt Varnish Off Line + Gloss Spot UV',
        'H': 'Outwork Lamination',
        'J': 'Outwork Lamination / Gloss Spot UV',
        'K': 'Outwork Lamination / Matt Spot UV',
        'L': 'Gloss Spot UV',
        'M': 'Matt Spot UV',
        'N': 'Gloss Varnish In Line + Matt Spot UV',
        'Q': 'Soft Matt Lam',
        'R': 'Soft Matt Lam / Gloss Spot Varnish',
        'V': 'Recycled Matt Laminate',
        'W': 'Recycled Matt Laminate/ Gloss Spot Varnish',
        'Y': 'Recycled Gloss Laminate',
        'Z': 'Recycled Gloss Laminate/ Matt Spot UV'
    },
    
    texture: {
        'P': 'Plain',
        'G': 'Grained'
    },
    
    weight: {
        '1': '220 gsm',
        '2': '220 gsm',
        '3': '260 gsm',
        '4': '150 gsm',
        '5': '135 gsm',
        '6': '130 gsm',
        '7': '220 gsm'
    },
    
    // Special inks and finishing processes (7th-9th characters)
    specialInks: {
        'F': 'Fluorescent',
        'S': 'Spot Colour',
        'M': 'Non-Conventional Metallic',
        'K': 'To be used in addition to \'M\' to show a Conventional Metallic',
        'B': 'Blocked (after print, before laminate)',
        'E': 'Embossed',
        'D': 'Debossed',
        'C': 'Die-Cutting',
        'P': 'Print Over Foil',
        'L': 'Block Over Laminate',
        'U': 'Uncoated Printing',
        'PB': 'Print Black Over Foil',
        'BE': 'Block & Emboss (same pass)',
        'DE': 'Deboss & Emboss (same pass)',
        'BD': 'Block & Deboss (same pass)',
        'S1': 'Other Spot UV',
        'S2': 'Pile Spot UV',
        'S3': 'Glitter Spot UV',
        'V1': 'Glow Varnish',
        'H1': 'Holographic Lam'
    }
};

// Function to decode Cover Spec codes
function decodeCoverSpec(code) {
    if (!code || code.length < 6) {
        return null;
    }

    const upperCode = code.toUpperCase().trim();
    let decodingHTML = '';
    let hasValidDecoding = false;

    // 1st Character - Product Type
    const product = upperCode[0];
    if (specData.product[product]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Product Type:</span>
                <span class="spec-value">${specData.product[product]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 2nd Character - Outside Colours
    const outsideColours = upperCode[1];
    if (specData.colours[outsideColours]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Outside Colours:</span>
                <span class="spec-value">${specData.colours[outsideColours]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 3rd Character - Inside Colours
    const insideColours = upperCode[2];
    if (specData.colours[insideColours]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Inside Colours:</span>
                <span class="spec-value">${specData.colours[insideColours]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 4th Character - Finish Type
    const finish = upperCode[3];
    if (specData.finish[finish]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Finish Type:</span>
                <span class="spec-value">${specData.finish[finish]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 5th Character - Texture
    const texture = upperCode[4];
    if (specData.texture[texture]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Surface Texture:</span>
                <span class="spec-value">${specData.texture[texture]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 6th Character - Material Weight
    const weight = upperCode[5];
    if (specData.weight[weight]) {
        decodingHTML += `
            <div class="spec-row">
                <span class="spec-label">Material Weight:</span>
                <span class="spec-value">${specData.weight[weight]}</span>
            </div>
        `;
        hasValidDecoding = true;
    }

    // 7th-9th Characters - Special Inks/Processes (optional)
    if (upperCode.length > 6) {
        const specialSection = upperCode.substring(6);
        const processBreakdown = [];
        let i = 0;
        
        while (i < specialSection.length) {
            let found = false;
            
            // Check for 2-character codes first
            if (i < specialSection.length - 1) {
                const twoChar = specialSection.substring(i, i + 2);
                if (specData.specialInks[twoChar]) {
                    processBreakdown.push(specData.specialInks[twoChar]);
                    i += 2;
                    found = true;
                }
            }
            
            // If no 2-character code found, check single character
            if (!found) {
                const singleChar = specialSection[i];
                if (specData.specialInks[singleChar]) {
                    processBreakdown.push(specData.specialInks[singleChar]);
                }
                i++;
            }
        }
        
        if (processBreakdown.length > 0) {
            decodingHTML += `
                <div class="spec-row">
                    <span class="spec-label">Special Processes:</span>
                    <span class="spec-value">${processBreakdown.join(', ')}</span>
                </div>
            `;
            hasValidDecoding = true;
        }
    }

    return hasValidDecoding ? decodingHTML : null;
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Add event listener for Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBooks();
        }
    });
    
    // Clear field when user clicks into it
    searchInput.addEventListener('focus', function(e) {
        e.target.value = '';
        // Also clear any existing results
        document.getElementById('results').innerHTML = '';
        document.getElementById('actionButtons').style.display = 'none';
        document.getElementById('copyResultBtn').disabled = true;
    });

    // Load data when page loads
    loadBooksData();
});

// Load books database from data.json
async function loadBooksDatabase() {
    try {
        const response = await fetch(`data.json?t=${Date.now()}`);
        if (!response.ok) {
            console.warn('Could not load data.json - proceeding without database lookup');
            return;
        }
        booksDatabase = await response.json();
        console.log(`Loaded ${booksDatabase.length} books from database`);
    } catch (error) {
        console.warn('Error loading books database:', error);
    }
}

// Search function
function searchBooksData(query) {
    const searchTerm = query.toLowerCase().trim();
    
    return booksData.filter(book => {
        // Search by ISBN (convert to string and remove spaces/dashes)
        const isbn = book.ISBN.toString().replace(/[-\s]/g, '');
        const searchISBN = searchTerm.replace(/[-\s]/g, '');
        
        // Search by Master Order ID
        const masterID = book['Master Order ID'].toLowerCase();
        
        return isbn.includes(searchISBN) || masterID.includes(searchTerm);
    });
}

// Display results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="alert alert-warning no-results fade-in" role="alert">
                <i class="bi bi-exclamation-triangle"></i> <strong>No results found</strong><br>
                Please check your ISBN or Master Order ID and try again.
            </div>
        `;
        document.getElementById('copyResultBtn').disabled = true;
        return;
    }

    let html = '<div class="fade-in">';
    
    results.forEach((book, index) => {
        try {
            const coverSpecDecoding = decodeCoverSpec(book['Cover Spec']);
            
            html += `
                <div class="book-result border-success">
                    <div class="book-title">
                        <i class="bi bi-book"></i> ${book.TITLE}
                    </div>
                    
                    <div class="section-header">Basic Information</div>
                    <div class="spec-row">
                        <span class="spec-label">ISBN:</span>
                        <span class="spec-value">${book.ISBN}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Master Order ID:</span>
                        <span class="spec-value">${book['Master Order ID']}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Bind Style:</span>
                        <span class="spec-value">${book['Bind Style']}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Extent:</span>
                        <span class="spec-value">${book.Extent} pages</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Bleeds:</span>
                        <span class="spec-value">${book.Bleeds || 'Not specified'}</span>
                    </div>
            `;
            
            // Display all price fields - show "Unpriced" for empty values
            const priceUK = (book['Price UK'] && book['Price UK'].toString().trim()) ? book['Price UK'] : 'Unpriced';
            const priceUS = (book['Price US'] && book['Price US'].toString().trim()) ? book['Price US'] : 'Unpriced';
            const priceCAN = (book['Price CAN'] && book['Price CAN'].toString().trim()) ? book['Price CAN'] : 'Unpriced';
            
            html += `
                <div class="spec-row">
                    <span class="spec-label">Price (UK):</span>
                    <span class="spec-value">${priceUK}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Price (US):</span>
                    <span class="spec-value">${priceUS}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Price (Canada):</span>
                    <span class="spec-value">${priceCAN}</span>
                </div>
                
                <div class="section-header">Physical Specifications</div>
                <div class="spec-row">
                    <span class="spec-label">Trim Height:</span>
                    <span class="spec-value">${book['Trim Height']} mm</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Trim Width:</span>
                    <span class="spec-value">${book['Trim Width']} mm</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Cover Spine:</span>
                    <span class="spec-value">${book['Cover Spine']} mm</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Paper:</span>
                    <span class="spec-value">${book.Paper}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Paper Weight:</span>
                    <span class="spec-value">${book.Gsm} gsm</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Paper Thickness:</span>
                    <span class="spec-value">${book.Micron} microns</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Cover Spec:</span>
                    <span class="spec-value">${book['Cover Spec']}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Packing:</span>
                    <span class="spec-value">${book.Packing || 'Not specified'}</span>
                </div>
                
                ${coverSpecDecoding ? `
                <div class="section-header">Cover Specification Decoded</div>
                ${coverSpecDecoding}
                ` : ''}
            </div>
        `;
        } catch (error) {
            console.error('Error processing book:', book.TITLE, error);
            // Add a fallback display for this book
            html += `
                <div class="book-result border-success">
                    <div class="book-title">
                        <i class="bi bi-book"></i> ${book.TITLE}
                    </div>
                    <div class="alert alert-warning">
                        <i class="bi bi-exclamation-triangle"></i> Error displaying some details for this book.
                    </div>
                </div>
            `;
        }
    });
    
    if (results.length === 1) {
        html += `
            <div class="summary-card">
                <h5><i class="bi bi-clipboard-check"></i> Book Specification Summary</h5>
                <p class="mb-2"><strong>Title:</strong> ${results[0].TITLE}</p>
                <p class="mb-2"><strong>ISBN:</strong> ${results[0].ISBN}</p>
                <p class="mb-2"><strong>Master Order ID:</strong> ${results[0]['Master Order ID']}</p>
                <p class="mb-0"><strong>Specifications:</strong> ${results[0]['Trim Height']}×${results[0]['Trim Width']}mm, ${results[0].Extent} pages, ${results[0]['Bind Style']} binding</p>
            </div>
        `;
    } else {
        html += `
            <div class="summary-card">
                <h5><i class="bi bi-clipboard-check"></i> Search Results Summary</h5>
                <p class="mb-0">Found <strong>${results.length}</strong> matching book${results.length === 1 ? '' : 's'}</p>
            </div>
        `;
    }
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    
    // Enable copy button
    document.getElementById('copyResultBtn').disabled = false;
}

// Show error message
function showError(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <div class="alert alert-danger fade-in" role="alert">
            <i class="bi bi-exclamation-circle"></i> <strong>Error:</strong> ${message}
        </div>
    `;
    document.getElementById('copyResultBtn').disabled = true;
}

// Main search function
async function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const searchText = document.querySelector('.search-text');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const searchButton = document.querySelector('.btn-primary');
    const resultsDiv = document.getElementById('results');
    
    const query = searchInput.value.trim();
    
    if (!query) {
        resultsDiv.innerHTML = `
            <div class="alert alert-warning fade-in">
                <i class="bi bi-exclamation-triangle"></i> Please enter an ISBN or Master Order ID to search.
            </div>
        `;
        return;
    }

    // Show loading state
    searchText.style.display = 'none';
    loadingSpinner.style.display = 'inline';
    searchButton.disabled = true;
    document.getElementById('actionButtons').style.display = 'flex';

    // If data hasn't been loaded yet, load it
    if (booksData.length === 0) {
        await loadBooksData();
    }

    // Simulate a small delay for better UX
    setTimeout(() => {
        try {
            const results = searchBooksData(query);
            displayResults(results);
        } catch (error) {
            showError('An error occurred while searching. Please try again.');
            console.error('Search error:', error);
        } finally {
            // Reset button state
            searchText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
            searchButton.disabled = false;
        }
    }, 500);
}

function clearSearch() {
    // Reset input field
    document.getElementById('searchInput').value = '';
    
    // Hide results and action buttons
    document.getElementById('results').innerHTML = '';
    document.getElementById('actionButtons').style.display = 'none';
    
    // Disable copy button
    document.getElementById('copyResultBtn').disabled = true;
    
    // Focus back on input
    document.getElementById('searchInput').focus();
}

function copyResultToClipboard() {
    // Get the search input and results
    const query = document.getElementById('searchInput').value;
    const summaryCard = document.querySelector('.summary-card');
    const bookResults = document.querySelectorAll('.book-result');
    
    if (!summaryCard || bookResults.length === 0) {
        alert('No results to copy.');
        return;
    }
    
    // Create text for clipboard
    let clipboardText = `Book Specification Search Results\n`;
    clipboardText += `=====================================\n`;
    clipboardText += `Search Query: ${query}\n\n`;
    
    bookResults.forEach((result, index) => {
        const title = result.querySelector('.book-title').textContent.replace('📖 ', '').trim();
        const specRows = result.querySelectorAll('.spec-row');
        
        clipboardText += `Book ${index + 1}: ${title}\n`;
        clipboardText += `${'-'.repeat(title.length + 8)}\n`;
        
        specRows.forEach(row => {
            const label = row.querySelector('.spec-label').textContent;
            const value = row.querySelector('.spec-value').textContent;
            clipboardText += `${label} ${value}\n`;
        });
        
        if (index < bookResults.length - 1) {
            clipboardText += '\n';
        }
    });
    
    // Copy to clipboard
    navigator.clipboard.writeText(clipboardText)
        .then(() => {
            // Add a temporary success indicator
            const btn = document.getElementById('copyResultBtn');
            
            // Save original button content
            const originalButton = btn.innerHTML;
            
            // Replace with temporary success message
            btn.innerHTML = '<span class="d-none d-md-inline">Copied!</span><span class="d-inline d-md-none">Copied!</span>';
            btn.classList.remove('btn-info');
            btn.classList.add('btn-success');
            
            setTimeout(() => {
                // Restore original button content
                btn.innerHTML = originalButton;
                btn.classList.remove('btn-success');
                btn.classList.add('btn-info');
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy to clipboard. Please try again.');
        });
}
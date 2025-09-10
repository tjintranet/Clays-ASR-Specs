# Book Specification Search Application

A comprehensive web application for searching book specifications by ISBN or Master Order ID, with integrated Cover Specification decoder and ASR processing rules reference.

## 🎯 Features

### 📖 Book Search
- **ISBN Search**: Search by full or partial ISBN numbers
- **Master Order ID Search**: Search using Master Order IDs (e.g., SA0736)
- **Detailed Specifications**: View complete book specifications including:
  - Basic Information (ISBN, Master Order ID, Bind Style, Extent, Price)
  - Physical Specifications (Trim Height, Trim Width, Cover Spine, Paper details)
  - Paper specifications (GSM and Micron values)
  - Packing information

### 🔍 Cover Specification Decoder
- **Automatic Decoding**: Cover Spec codes are automatically decoded when found
- **Comprehensive Patterns**: Supports full range of cover specifications:
  - Product Types (Cover, Cover with Flaps, Jacket, Tip-In, Cover For Case)
  - Color Specifications (0-9 colors including spot and process colors)
  - Finish Types (Laminates, varnishes, UV treatments)
  - Surface Textures (Plain, Grained)
  - Material Weights (Various GSM options)
  - Special Processes (Foiling, embossing, spot UV, etc.)

### 📋 ASR Processing Rules
- **Dedicated Reference Page**: Complete ASR processing standards
- **General Rules**: Paperback specifications and restrictions
- **Paper Standards**: Current ASR papers with GSM/Micron specifications
- **Customer Rules**: Publisher-specific finish requirements
- **Production Guidelines**: Inside printing, cover board, and pricing rules
- **Compliance**: FSC/EEA requirements and update rules

### 🎨 User Interface
- **Clean Design**: Professional Bootstrap-based interface
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects and smooth animations
- **Easy Navigation**: Simple navigation between search and rules pages
- **Copy to Clipboard**: Export search results for external use

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or hosting platform

### Installation

1. **Download/Clone the files**:
   ```
   book-search-app/
   ├── index.html
   ├── asr-rules.html
   ├── script.js
   ├── data.json
   └── README.md
   ```

2. **Set up your book data**:
   - Update `data.json` with your book specification data
   - Ensure the JSON structure matches the expected format (see Data Format section)

3. **Serve the application**:
   - **Local Development**: Use a local web server (Python, Node.js, or VS Code Live Server)
   - **Production**: Upload files to your web hosting platform

### Data Format

The application expects `data.json` to contain an array of book objects with this structure:

```json
[
  {
    "ISBN": 9780755305308,
    "Master Order ID": "SA0736",
    "TITLE": "ASR GIRL IN HYACINTH BLUE",
    "Trim Height": 198,
    "Trim Width": 129,
    "Bind Style": "Limp",
    "Extent": 192,
    "Cover Spine": 12,
    "Paper": "DCLAY01",
    "Gsm": 52,
    "Micron": 114,
    "Cover Spec": "C406P2",
    "Price": "Unpriced",
    "Packing": "Pack (104) (8) Base."
  }
]
```

### Required Fields
- `ISBN`: Book ISBN number
- `Master Order ID`: Unique order identifier
- `TITLE`: Book title
- `Trim Height`: Height in millimeters
- `Trim Width`: Width in millimeters
- `Bind Style`: Binding type
- `Extent`: Number of pages
- `Cover Spine`: Spine width in millimeters
- `Paper`: Paper specification code
- `Gsm`: Paper weight in GSM
- `Micron`: Paper thickness in microns
- `Cover Spec`: Cover specification code (for decoding)
- `Price`: Pricing information
- `Packing`: Packing specifications

## 🔧 Technical Details

### Architecture
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap 5.3.2 with custom CSS
- **Icons**: Bootstrap Icons 1.11.1
- **Data**: JSON file-based storage
- **No Backend Required**: Pure client-side application

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### File Structure
```
├── index.html          # Main search interface
├── asr-rules.html      # ASR processing rules page
├── script.js           # Search functionality and Cover Spec decoder
├── data.json          # Book specification data
├── README.md          # This file
└── assets/            # Optional: favicon and touch icons
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

## 🎮 Usage

### Basic Search
1. Open `index.html` in your web browser
2. Enter an ISBN number or Master Order ID in the search field
3. Click "Search Books" or press Enter
4. View detailed results with decoded specifications

### Using ASR Rules
1. Click "ASR Rules" button in the top-right corner of the search page
2. Browse comprehensive ASR processing guidelines
3. Use "Back to Search" to return to the main application

### Search Tips
- **ISBN Search**: You can search with partial ISBNs
- **Master Order ID**: Case-insensitive search
- **Multiple Results**: Application displays all matching books
- **Cover Specs**: Automatic decoding shows detailed breakdown

## 🛠️ Customization

### Styling
- Modify CSS variables in `index.html` and `asr-rules.html` for color themes
- Update Bootstrap classes for different layouts
- Add custom CSS for additional styling

### Cover Spec Decoder
- Extend `specData` object in `script.js` to add new specification codes
- Modify decoding logic for custom specification formats
- Add new special processes or finishing options

### ASR Rules
- Update `asr-rules.html` to modify processing rules
- Add new customer rules or paper specifications
- Customize sections based on your requirements

## 📊 Data Management

### Adding Books
1. Edit `data.json`
2. Add new book objects following the required format
3. Ensure all required fields are included
4. Save and refresh the application

### Updating Cover Specs
- Modify the `specData` object in `script.js`
- Add new product types, colors, finishes, or special processes
- Test decoding with sample Cover Spec codes

## 🐛 Troubleshooting

### Common Issues

**Search not working**:
- Check that `data.json` is properly formatted
- Ensure web server is running (required for loading JSON files)
- Check browser console for JavaScript errors

**Cover Spec not decoding**:
- Verify Cover Spec codes match expected patterns
- Check `specData` object for missing specifications
- Ensure Cover Spec field is not empty

**Styling issues**:
- Verify Bootstrap CSS is loading properly
- Check for conflicting CSS rules
- Ensure responsive design works on your target devices

### Development Tips
- Use browser Developer Tools for debugging
- Check Network tab to ensure all files are loading
- Use Console tab to view any JavaScript errors
- Test on multiple browsers and devices

## 📝 License

This project is provided as-is for internal use. Modify and adapt as needed for your specific requirements.

## 🤝 Contributing

To contribute improvements:
1. Test thoroughly on multiple browsers
2. Ensure responsive design is maintained
3. Update documentation for any new features
4. Follow existing code style and structure

## 📞 Support

For technical issues or questions:
- Check browser console for error messages
- Verify data format matches expected structure
- Ensure all required files are present and accessible
- Test with sample data to isolate issues

---

**Version**: 1.0  
**Last Updated**: January 2025  
**Compatibility**: Modern web browsers with JavaScript enabled
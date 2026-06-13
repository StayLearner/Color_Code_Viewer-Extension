# 🎨 ColorPicker.exe — Pro Pixel Edition 🖥️

A modern Chrome extension with a nostalgic Windows 98-inspired interface that allows users to pick colors from anywhere on their screen, instantly view HEX/RGB values, manage color history, and export collected colors.

Built with **React**, **Vite**, and **98.css**, this project combines a retro desktop aesthetic with modern frontend architecture and Chrome Extension APIs.

---

## 🚀 Live Extension

🌐 Chrome Web Store:

https://chromewebstore.google.com/detail/color-code-viewer/neickedhklkbkiofgdjdfojiepcfhpla

---

## ✨ Features

### 🌈 Pixel Perfect Color Picking

* Pick any color directly from your screen using the native EyeDropper API.
* Capture precise pixel values instantly.

### 🎯 HEX & RGB Detection

* View color values in:

  * HEX Format
  * RGB Format

### 📋 One-Click Clipboard Copy

* Copy HEX or RGB values instantly.
* Visual feedback after successful copy.

### 📝 Color Inventory Management

* Automatically stores picked colors.
* Scrollable color history table.
* Easy access to previously selected colors.

### 💾 Export Color Collection

* Export all saved colors into a `.txt` file.
* Useful for design systems, branding kits, and UI development.

### 🧹 Clear Color History

* Remove all saved colors with a single click.

### 🖥️ Windows 98 Inspired Interface

* Built using **98.css**.
* Retro title bar.
* Classic desktop application appearance.
* Pixel-perfect borders and controls.

### 📟 Dynamic Window Expansion

* Toggle between:

  * Compact Popup View
  * Expanded Inventory Management View

### 🔊 Retro Sound Effects

* Audio feedback for:

  * Color selection
  * Copy operations
  * Export actions
  * Clear actions

### ⚡ Local Storage Persistence

* Saved colors remain available between browser sessions.
* No external database required.

---

## 🏗️ Tech Stack

### Frontend

* React 18
* JavaScript
* HTML5
* CSS3

### Styling

* 98.css

### Build Tool

* Vite

### Browser APIs

* Chrome Extensions API
* EyeDropper API
* Local Storage API
* Clipboard API

### Extension Platform

* Manifest V3

---

## 📂 Project Structure

```bash
src/
├── components/
├── assets/
├── App.jsx
├── main.jsx
└── styles/

public/
├── manifest.json
├── icons/
```

## 🔧 Installation

### Clone Repository

```bash
git clone <repository-url>
cd ColorPicker.exe
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Extension

```bash
npm run build
```

### Load Extension in Chrome

1. Open Chrome.
2. Navigate to:

```bash
chrome://extensions
```

3. Enable Developer Mode.
4. Click Load Unpacked.
5. Select the generated build folder.

---

## 🚀 Usage

### Pick a Color

1. Open the extension.
2. Click **Pick Color**.
3. Select any pixel on your screen.

### Copy Values

* Click any HEX value.
* Click any RGB value.
* Value is automatically copied to clipboard.

### Export Colors

* Click **Export List**.
* Download all collected colors as a text file.

### Clear Inventory

* Click **Clear All** to remove saved colors.

### Expand Workspace

* Use the maximize control to switch between compact and expanded modes.

---

## 🎯 Why This Project?

This project demonstrates:

* Chrome Extension Development
* React-Based Architecture
* Browser API Integration
* State Management
* Local Storage Handling
* UI/UX Design
* Retro Design Systems
* Manifest V3 Compliance
* Production Deployment

---

## 📈 Future Improvements

* Color Palette Generation
* Theme Builder
* Gradient Generator
* Tailwind Color Export
* CSS Variable Export
* Design Token Support
* Dark/Light Retro Themes

---

## 🤝 Contributing

Contributions are welcome!

Feel free to:

* Fork the repository
* Create a feature branch
* Submit a pull request
* Report bugs
* Suggest enhancements

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Rohan Ghosh**

Frontend Developer | MERN Stack Developer | Chrome Extension Developer

Building practical products while continuously learning and improving.

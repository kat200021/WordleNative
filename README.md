# 🟩 WordleNative – A Wordle Clone in React Native

A fully functional Wordle game built using **React Native**. Type or tap letters to guess the 5-letter solution in 6 tries. Includes dynamic box coloring, touch keyboard, and a game reset button.

---

## 🚀 Features

- Interactive grid that updates per guess
- On-screen keyboard with **ENTER** and **⌫**
- Automatic coloring logic (🟩 correct, 🟧 misplaced)
- Auto-submit at 5 characters
- "Play Again" reset button
- React Native support for iOS & Android

---

## 🛠️ Built With

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Metro Bundler](https://facebook.github.io/metro/)
- Native iOS/Android build support via CLI

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v18 or later)
- Watchman (Mac only): `brew install watchman`
- Xcode (for iOS simulator)
- Android Studio (optional, for Android emulator)
- Ruby (for CocoaPods)
- CocoaPods: `sudo gem install cocoapods`

---

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/WordleNative.git
cd WordleNative

# Install dependencies
npm install

# Install iOS dependencies
cd ios && pod install && cd ..

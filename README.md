# Next.js Gemini Chat App

A modern, responsive AI chat application built with **Next.js** and integrated with **Google's Gemini AI**. This project allows users to have real-time, intelligent conversations with an AI assistant in a clean, intuitive interface.

## 🚀 Features

* **Real-time AI Chat**: Seamless communication with Google’s Gemini models.
* **Markdown Support**: Responses are rendered in rich text, including code blocks, lists, and bold text.
* **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile views using Tailwind CSS.
* **Modern Tech Stack**: Built with Next.js 14/15 (App Router) for high performance and SEO.
* **Streaming Responses**: (Optional/Suggested) Interactive UX where the AI replies word-by-word.

## 🛠️ Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **AI Engine**: [Google Generative AI (Gemini API)](https://ai.google.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/) or [React Icons]
* **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

* Node.js 18.x or later.
* A Google AI Studio API Key. You can get one for free at [aistudio.google.com](https://aistudio.google.com/).

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/SithilSemitha/next-gemini-chat-app.git
cd next-gemini-chat-app

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Set up environment variables:**
Create a `.env.local` file in the root directory and add your API key:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here

```


4. **Run the development server:**
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
├── app/                # Next.js App Router (pages & layouts)
├── components/         # Reusable UI components (ChatWindow, Sidebar, Input)
├── lib/                # API configuration and utility functions
├── public/             # Static assets (images, icons)
└── styles/             # Global CSS and Tailwind configurations

```

## 🛡️ License

Distributed under the MIT License. See `LICENSE` for more information.

Developed by [Sithil Semitha](https://www.google.com/search?q=https://github.com/SithilSemitha)

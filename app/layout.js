"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const initBotpress = () => {
    window.botpressWebChat.init({
      composerPlaceholder: "Chat with bot",
      botConversationDescription:
        "This chatbot was built surprisingly fast with Botpress",
      botId: "f8052d68-b3d1-41f2-9a83-ebd4986aca4d",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "f8052d68-b3d1-41f2-9a83-ebd4986aca4d",
      webhookId: "916db680-cd83-4c81-84f5-c98075740ca5",
      lazySocket: true,
      themeName: "prism",
      frontendVersion: "v1",
      showPoweredBy: true,
      theme: "prism",
      themeColor: "#2563eb",
    });
  };
  return (
    <html lang="en">
      <head>
        <title>Magic: The Gathering</title>
        <Script
          src="https://cdn.botpress.cloud/webchat/v1/inject.js"
          onLoad={() => initBotpress()}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

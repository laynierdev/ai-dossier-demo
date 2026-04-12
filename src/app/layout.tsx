import type { Metadata } from "next";
import {Lexend } from "next/font/google";
import "./globals.css";
import React from "react";
const lexend = Lexend({
  subsets: ["latin"],
  weight: ['400','500', '700'],
  variable: '--font-lexend'});

export const metadata: Metadata = {
  title: "Ryvar Beauty & Wellness center",
  description: "Website for beauty and wellness activities management",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <meta name="apple-mobile-web-app-title" content="Ryvar"/>
        <link rel="manifest" href="/site.webmanifest"/>

        {/* Bootstrap CSS */}
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
        />

        {/* Bootstrap JS Bundle */}
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            defer
        ></script>

        <title>Ryvar. Beauty and Wellness center</title>
      </head>
      <body className={lexend.className}>
      <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
      />
      <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
      />
      <link
          href={"https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap"}
          rel="stylesheet"
      />

          <div className="app-layout">
            <main className="app-content">
              {children}
            </main>

          </div>
      </body>

      </html>
  );
}

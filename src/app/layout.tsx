import './globals.css';
import React from "react";
import Contact from "@/components/Contact";

export default function RootLayout(
    {children}: { children: React.ReactNode }
) {
    return (
        <html lang="en">
        <body>
        {children}
        <Contact/>
        </body>
        </html>
    )
}

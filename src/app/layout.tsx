import './globals.css';
import React from "react";
import Contact from "@/app/Contact";

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

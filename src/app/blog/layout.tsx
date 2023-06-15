import Navbar from "@/components/Navbar";
import React from "react";

export default function BlogLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"bg-gray-700"}>
            <Navbar
                links={[
                    {href: '/blog/', text: "Blog"},
                    {href: '/#experience', text: "Experience"},
                    {href: '/#skills', text: "Technologies"},
                    {href: '/blog/#contact', text: "Contact"},
                ]}
            />
            {children}
        </div>
    )
}
import Navbar from "@/components/Navbar";

export default function BlogLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"bg-gray-700"}>
            <Navbar links={
                [
                    {href: '/blog/', text: "Home"},
                    {href: '#', text: "Latest Posts"},
                    {href: '#', text: "Top"},
                    {href: '#', text: "Random Post"},
                ]
            }/>
            {children}
        </div>
    )
}
import Head from 'next/head'
import {getSortedPostsData} from '@/lib/posts'
import Layout from "@/components/Layout";
import svg from "../../../public/svg/waves.svg";
import Link from "next/link";

export default function page() {

    const allPostsData = getSortedPostsData()

    const lastPost = allPostsData.shift()

    return (
        <Layout>

            <Head>
                <title>Bruno Lemus - Blog</title>
            </Head>


            <div className={"flex flex-col bg-gray-900 m-0 p-0 bg-cover items-center"}
                 style={{backgroundImage: `url(${svg.src}`}}>

                <div
                    className={"bg-gray-50 text-black p-10 rounded-md shadow-xl m-10 z-10 flex-1 w-fit align-start text-wrap max-w-xl"}>
                    <h1 className={"mb-2 text-bg text-gray-600"}>LATEST</h1>
                    <h1 className={"text-4xl text-gray-900"}>
                        {lastPost?.title}
                    </h1>
                    <div className={"mt-5"}>
                        <h1 className={"text-gray-500"}>{lastPost?.date}</h1>
                        <p>{lastPost?.excerpt}</p>
                    </div>
                </div>

            </div>

            <div className={"bg-gray-900 w-full flex flex-col items-center"}>
                <ul className={"m-0 w-fit h-fit bg-gray-100 rounded-md shadow-md mb-5"}>
                    {allPostsData.map(post =>
                        <Link key={post.id} href={`blog/${post.id}`}>
                            <li
                                className={"p-10 m-5 max-w-xl border-b-2 border-gray-400 last:border-none"}>
                                <h1 className={"text-xl text-gray-900"}>{post.title}</h1>
                                <h1 className={"text-gray-500"}>{post.date}</h1>
                            </li>
                        </Link>
                    )}
                </ul>
            </div>


        </Layout>
    )

}

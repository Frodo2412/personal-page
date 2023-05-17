import Head from 'next/head'
import {getSortedPostsData} from '@/lib/posts'
import Layout from "@/components/Layout";
import Waves from "@/app/blog/Waves";

const topColor = 'rgb(55 65 81)'
const bottomColor = 'rgb(0,0,0)'

export default function page() {

    const allPostsData = getSortedPostsData()

    return (
        <Layout>

            <Head>
                <title>Bruno Lemus - Blog</title>
            </Head>

            <Waves
                top={topColor}
                bottom={bottomColor}
            />

            <ul className={"bg-gray-900"}>
                {allPostsData.map(post =>
                    <li key={post.id} className={"p-10 m-2 rounded-md border-gray-300 border-2"}>
                        <h1>{post.title}</h1>
                        <h1>{post.date}</h1>
                    </li>
                )}
            </ul>

        </Layout>
    )

}

import {getAllPostIds, getPostData} from "@/lib/posts";

export default async function Page({params}: { params: { slug: string } }) {

    const postData = await getPostData(params.slug as string)

    return (
        <div>
            {postData.title}
            <br/>
            {postData.id}
            <br/>
            {postData.date}
        </div>
    );
}

export async function generateStaticParams() {
    const posts = getAllPostIds();

    return posts.map((post) => ({
        slug: post.params.id,
    }));
}

// import Header from "@component/Header";
import AdminLayout from "@component/layout/adminLayout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = dynamic(() => import("../../component/Header"), { ssr: false });

type Props = {
    post: any;
};

const Post = ({ post }: Props) => {
    const router = useRouter();
    return (
        <div>
            <Header />
            {post.map((item: any) => (
                <li key={item.id}>
                    <Link href={`/posts/${item.id}`}>{item.title}</Link>
                </li>
            ))}
        </div>
    );
};

Post.layout = AdminLayout;

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1");
    const data = await response.json();
    return {
        props: {
            post: data.data.map((x: any) => ({
                id: x.id,
                title: x.title,
            })),
        },
    };
};

export default Post;

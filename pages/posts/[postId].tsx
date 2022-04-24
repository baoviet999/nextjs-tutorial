import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";



type Props = {
    post: any;
};

const Food = ({ post }: Props) => {
    return <div>{post.title}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?page=1");
    const data = await response.json();
    // console.log(data.data.map((post: any) => ({ params: { postId: post.id } })))
    return {
        paths: data.map((post: any) => ({ params: { postId: post.id } })),
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
    const postId = context.params?.postId;
    // console.log('postId' , postId)
    if (!postId) return { notFound: true };

    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    const data = await response.json();
    return {
        props: {
            post: data,
        },
    };
};
export default Food;

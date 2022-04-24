import MainLayout from "@component/layout/MainLayout";
import { NextPageWithLayout } from "models/common";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

const Food = (props: NextPageWithLayout) => {
    const router = useRouter();

    const [post, setPosts] = useState([]);
    const page = router.query?.page;
    useEffect(() => {
        if (!page) return;
        (async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data: any = await response.json();
            setPosts(data.data);
        })();
    }, [page]);
    const handleNewPage = () => {
        router.push(
            {
                pathname: "/food",
                query: {
                    page: Number(page || 1) + 1,
                },
            },
            undefined,
            { shallow: true }
        );
    };
    return (
        <div>
            <h1>Client side đã render sẵn bên phía server rồi</h1>
            <ul>
                {post.map((ite: any, idx) => (
                    <li key={idx}>{ite.title}</li>
                ))}
            </ul>
            <button onClick={handleNewPage}>Click me</button>
        </div>
    );
};

Food.layout = MainLayout;

export default Food;

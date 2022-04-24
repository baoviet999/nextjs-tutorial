import MainLayout from "@component/layout/MainLayout";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Detail = (props: Props) => {
    // const router = useRouter();
    // router.push({
    //     pathname: "/detail",
    //     query: {
    //         postId: "123",
    //         name: "viet",
    //     },
    // });
    return <div>Detail</div>;
};

Detail.Layout = MainLayout

export default Detail;

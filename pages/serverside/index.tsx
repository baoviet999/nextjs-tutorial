import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
    food: any;
};

const ServerSide = ({ food }: Props) => {
    return <div>{food.title}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
    context.res.setHeader("Cache-Control", "s-maxage=5");
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, 3000);
    });
    return {
        props: {
            food: { title: "mon ngon" },
        },
    };
};

export default ServerSide;

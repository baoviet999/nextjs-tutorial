import React from "react";
import useSWR from "swr";

type Props = {
    id: string;
};

export const StudentData = ({ id }: Props) => {
    const { data, isValidating, mutate, error } = useSWR(`/students/${id}`);
    console.log(data);
    return <div>{data?.name}</div>;
};

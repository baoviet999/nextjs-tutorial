import { StudentData } from "@component/swr";
import React, { useState } from "react";
import useSWR from "swr";

const SwrPage = () => {
    const { data, isValidating, mutate, error } = useSWR(`/students/sktwi1cgkkuif36f3`, {
        dedupingInterval: 2000,
    });
    const [a, setA] = useState([1, 1, 1]);
    const handle = () => {
        setA((prev) => [...prev, 1]);
    };
    const handleMutate = () => {
        mutate({ name: "Loading" }, false);
    };
    return (
        <div>
            <h1>{data?.id}</h1>
            <button onClick={handle}>New</button>
            <ul>
                {a.map((i, idx) => (
                    <li key={idx}>
                        <StudentData id="sktwi1cgkkuif36f3" />
                        <button onClick={handleMutate}>Refresh</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SwrPage;

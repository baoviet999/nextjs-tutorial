import React from "react";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({children}: Props) => {
    return (
        <div>
            <h1>Header</h1>
            <>{children}</>
            <h1>Footer</h1>
        </div>
    );
};

export default MainLayout;

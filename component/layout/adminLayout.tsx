import React from "react";

type Props = {
    children: React.ReactNode;
};

const AdminLayout = ({children}: Props) => {
    return (
        <div>
            <h1>Header</h1>
            <div>Side bar</div>
            <>{children}</>
        </div>
    );
};

export default AdminLayout;

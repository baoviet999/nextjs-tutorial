import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const EmptyLayout = ({children}: Props) => {
    return <>{children}</>;
};

export default EmptyLayout;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import EmptyLayout from "@component/layout/EmptyLayout";
import { AppPropsWithLayout } from "models/common";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

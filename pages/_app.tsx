import "../styles/globals.css";
import type { AppProps } from "next/app";
import EmptyLayout from "@component/layout/EmptyLayout";
import { AppPropsWithLayout } from "models/common";
import { SWRConfig } from "swr";
import axiosClient from "api-client/axios-client";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    return (
        <SWRConfig
            value={{
                fetcher: (url) => axiosClient.get(url),
            }}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}

export default MyApp;

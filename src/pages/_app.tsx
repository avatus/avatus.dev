import { useRef } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickAnywhere = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
                <title>avatus.dev</title>
            </Head>

            <div onClick={onClickAnywhere}>
                <main className="h-full bg-night text-terminal-white">
                    <Component {...pageProps} inputRef={inputRef} />
                </main>
            </div>
        </>
    );
}

export default MyApp;

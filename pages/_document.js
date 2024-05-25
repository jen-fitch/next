// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cabin&family=Open+Sans:wght@300;400;700&family=Roboto:wght@300;400;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                        rel="stylesheet"/>
                    <link rel="icon" href="/images/favicon.ico"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
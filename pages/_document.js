import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => ({
                        ...sheet.collectStyles(<App {...props} />),
                        ...sheets.collect(<App {...props} />),
                    }),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {sheets.getStyleElement()}
                        {sheet.getStyleElement()}
                        {flush() || null}
                    </React.Fragment>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

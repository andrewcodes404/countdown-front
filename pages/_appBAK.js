import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../lib/createApolloClient'
import { withApollo } from '../lib/apollo'

// style
import { ThemeProvider } from 'styled-components'
import theme from '../style/theme'
import { Normalize } from 'styled-normalize'
import Style from '../style/mainStyle'

// comps
import PageWrapper from '../components/layout/PageWrapper'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        // this exposes the query to the user
        pageProps.query = ctx.query
        return { pageProps }
    }
    render() {
        const { Component, apollo, pageProps } = this.props
        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <ThemeProvider theme={theme}>
                        <PageWrapper>
                            <Normalize />
                            <Style />
                            <Component {...pageProps} />
                        </PageWrapper>
                    </ThemeProvider>
                </ApolloProvider>
            </Container>
        )
    }
}
//wrapp the app with the apollo client
export default apolloClient(MyApp)
// export default withApollo(MyApp)

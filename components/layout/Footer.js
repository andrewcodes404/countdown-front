import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    footer {
        width: 95%;
        max-width: 1200px;
        margin: 60px auto 0;
        padding: 30px 0;
        border-top: 1px dashed orange;
    }
`

const Footer = () => (
    <FooterWrapper>
        <footer>my footer</footer>
    </FooterWrapper>
)

export default Footer

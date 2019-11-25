import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    footer {
        width: 95%;
        max-width: 1200px;
        margin: 0px auto 0;
        padding: 40px 0;
        border-top: 1px dashed green;

        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 576px) {
            justify-content: flex-end;
        }
    }
`

const Footer = () => (
    <FooterWrapper>
        <footer>
            <p>
                🎅 Need to talk to us? &gt;
                <a
                    href="mailto:hello@countdownwow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    hello@countdownwow.com
                </a>
            </p>
        </footer>
    </FooterWrapper>
)

export default Footer

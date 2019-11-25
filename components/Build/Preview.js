import React from 'react'

import Router from 'next/router'
//material ui
import Button from '@material-ui/core/Button'

import styled from 'styled-components'
const PreviewStyle = styled.div`
    .launch-btn-wrapper {
        text-align: center;
    }
    .launch-btn {
        margin: 50px auto;
        font-size: 40px;
        background-color: ${props => props.theme.red};
        color: white;
        &:hover {
            background-color: ${props => props.theme.green};
            color: white;
        }
    }
`

class Preview extends React.Component {
    handleLaunchBtn = () => {
        Router.push(`/cdw?id=${this.props.user.id}`)
    }
    render() {
        return (
            <PreviewStyle>
                <h3>6. Launch</h3>
                <h4>Ok are you ready to launch your CountdownWow? 👇</h4>

                <div className="launch-btn-wrapper">
                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => {
                            this.handleLaunchBtn()
                        }}
                        className="launch-btn"
                    >
                        GO !!!!!! 🚀
                    </Button>
                </div>
            </PreviewStyle>
        )
    }
}

export default Preview

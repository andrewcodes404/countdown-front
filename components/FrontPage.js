import React from 'react'
import { sendMail } from '../lib/mgMail'
class FrontPage extends React.Component {
    sendme = () => {
        console.log('it clicked')
    }
    render() {
        return (
            <div>
                <p>FrontPage</p>
                {/* <p style={{ cursor: 'pointer' }} onClick={this.sendme}>
                    send a mail
                </p> */}
            </div>
        )
    }
}

export default FrontPage

import FrontPage from '../components/FrontPage'
import PropTypes from 'prop-types'

const Index = props => {
    // console.log('props = ', props)
    console.log('props.loggedIn = ', props.loggedIn)

    return <FrontPage loggedIn={props.loggedIn} user={props.userLoggedIn} />
}

Index.propTypes = {
    loggedIn: PropTypes.bool,
    userLoggedIn: PropTypes.object,
}
export default Index

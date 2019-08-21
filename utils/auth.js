import { Query } from 'react-apollo'

import PropTypes from 'prop-types'
import { USER_LOGGEDIN } from '../lib/graphqlTags'

const Auth = props => (
    <Query {...props} query={USER_LOGGEDIN}>
        {payload => props.children(payload)}
    </Query>
)

Auth.propTypes = {
    children: PropTypes.func.isRequired,
}

export default Auth

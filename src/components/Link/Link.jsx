/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Link = ({ route }) => {
    return (
        <li className="mr-10 hover:bg-yellow-500" >
            <a href={route.path}> {route.component} </a>
        </li>
    )
}

Link.protoType = {
    route: PropTypes.object
}
export default Link

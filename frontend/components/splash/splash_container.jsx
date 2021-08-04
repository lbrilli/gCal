import { connect } from "react-redux";
import Splash from "./splash";
import { logout } from "../../actions/session_actions"


const mSTP = (state) => {
    let users = state.entities.users;
    let sessionId = state.session.id;

    return {
        currentUser: users[sessionId]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP,mDTP)(Splash);
import {
	HEADER_TABS,
	HEADER_RENAME,
	OPEN_SIDENAV,
	CLOSE_SIDENAV,
	SELECT_HEADER_TAB
} from '../actions/Layout';

const INITIAL_STATE = {
	headerTitle: null,
	headerTabs: null,
	headerTabSelected: 0,
	sideNavOpen: false
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case HEADER_RENAME: {
			return { ...state, headerTitle: action.payload };
		}
		case HEADER_TABS: {
			return { ...state, headerTabs: action.payload };
		}
		case OPEN_SIDENAV: {
			return { ...state, sideNavOpen: true };
		}
		case CLOSE_SIDENAV: {
			return { ...state, sideNavOpen: false };
		}
		case SELECT_HEADER_TAB: {
			return { ...state, headerTabSelected: action.payload };
		}
		default:
			return state;
	}
}

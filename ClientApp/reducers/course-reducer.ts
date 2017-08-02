import { GET_COURSES } from "../actions/actions";
import * as _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_COURSES:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
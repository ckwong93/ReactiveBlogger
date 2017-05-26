import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {} , action) {
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
      // mapKeys pulls out a property from an object and sets it as the key in value pairs
      // {'id':4,'hi'}=> '4':{id:4,'hi'}
    default:
    return state;
  }
}

export const FETCH_POST = 'FETCH_POST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

const reducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return action.data;
    case FETCH_FAIL:
    default:
      return state;
  }
};

export default reducer;

export const fetchPost = () => {
  return {
    type: FETCH_POST
  };
};

export const api = {
  getPost: () => {
    return async () => {
      try {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const json = await res.json();
        return json;
      } catch(error) {
        console.error(error);
      }
    ;}
  }
};

export const FETCH_POST = 'FETCH_POST';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

const initState = {
  isRefreshing: false,
  data: []
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return {
        isRefreshing: true,
        data: []
      };
    case FETCH_SUCCESS:
      return {
        isRefreshing: false,
        data: action.data
      };
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

export const listApi = {
  getPost: () => {
    return async () => {
      try {
        const res = await fetch('http://192.168.1.102:3000/api/dashboard');
        const json = await res.json();
        return json;
      } catch(error) {
        console.error(error);
      }
    }
  }
};

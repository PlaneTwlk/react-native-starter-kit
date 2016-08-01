export const SAVE_POST = 'SAVE_POST';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAIL = 'SAVE_FAIL';

const initState = {
  msg: null
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case SAVE_SUCCESS:
      return {
        msg: 'success'
      };
    case SAVE_FAIL:
      return {
        msg: 'fail'
      };
    default:
      return state;
  }
};

export default reducer;

export const savePost = (data) => {
  return {
    type: SAVE_POST,
    data: data
  };
};

export const formApi = {
  savePost: () => {
    return async (data) => {
      try {
        const res = await fetch('http://192.168.1.102:3000/api/post', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        return res;
      } catch(error) {
        console.log(error);
      }
    }
  }
};

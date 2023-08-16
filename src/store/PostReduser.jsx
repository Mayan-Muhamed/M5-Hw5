import axios from 'axios';

const loadPost = 'loadPost';
const loadCommit = 'loadCommit';
export const deletComent = 'deletComent';
const initialState = [];

export const postRedux = (state = initialState, action) => {
  switch (action.type) {
    case loadPost:
      const newState = action.payload.map((el) => {
        return { ...el, commit: null };
      });
      console.log('newstate', newState);
      return newState;
    case loadCommit:
      return state.map((el) => {
        if (el.id === action.payload.id) {
          el.commit = action.payload.comments;
        }
        return el;
      });
    case deletComent:
      return state.map((el) => {
        if (el.id === action.payload) {
          el.commit = null;
        }
        return el;
      });
    default:
      return state;
  }
};
// запрс на посты
export const getPosts = () => {
  return async (dispath) => {
    const response = await axios.get('https://dummyjson.com/posts?limit=10');
    console.log('response', response.data.posts);
    dispath({ type: 'loadPost', payload: response.data.posts });
  };
};
//  запрос на коментраий
export const getCommit = (id) => {
  return async (dispath) => {
    const response = await axios.get(
      `https://dummyjson.com/comments/post/${id}`
    );

    dispath({
      type: loadCommit,
      payload: { comments: response.data.comments, id },
    });
  };
};

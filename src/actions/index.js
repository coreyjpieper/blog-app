import jsonplaceholder from '../apis/jsonplaceholder';

export const fetchPosts = () =>
async function(dispatch, getState) {
  const response = await jsonplaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response })
};

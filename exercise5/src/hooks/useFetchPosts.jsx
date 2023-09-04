import { useReducer, useEffect } from 'react';

const postsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: 'Failed to fetch data', posts: null };
    default:
      throw new Error('Invalid action type');
  }
};


function useFetchPosts(limit) {
  const [state, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: 'FETCH_INIT' });

    fetch(`https://dummyjson.com/posts`)
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data.posts });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR' });
        }
      });

    return () => {
      isMounted = false;
    };

  }, [limit]);

  return { ...state };
}


export default useFetchPosts;


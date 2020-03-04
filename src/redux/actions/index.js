export const types = {
    CHANGE_NUMBER: 'CHANGE_NUMBER',

    GET_POSTS: 'GET_POSTS',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
};

export function changeNumber(value) {
    return {
        type: types.CHANGE_NUMBER,
        payload: value
    }
}

export function getPosts() {
    return {
        type: types.GET_POSTS
    }
}

export function getPostsSuccess(posts) {
    return {
        type: types.GET_POSTS_SUCCESS,
        payload: posts
    }
}
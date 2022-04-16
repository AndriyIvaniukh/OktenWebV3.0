const baseUrl = process.env.REACT_APP_API;

const urls = {
    users :'/users',
    posts:'/posts',
    comments:'/comments'
}

export default baseUrl;
export {
    urls
}
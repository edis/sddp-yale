const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_TOKEN
})

const getBlogPosts = () => client.getEntries({content_type: "announcement"});
const getPamphlets = () => client.getEntries({content_type: "pamphlets"});
const getPhotos = () => client.getEntries({content_type: "photo"});

export { getBlogPosts, getPamphlets, getPhotos }

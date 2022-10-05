const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_TOKEN
})

const getBlogPosts = () => client.getEntries()

const getSinglePost = slug =>
    client
        .getEntries({
            'fields.slug': slug,
            content_type: 'blogPost'
        })
        .then(response => response.items)

export { getBlogPosts, getSinglePost }

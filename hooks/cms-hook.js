import { useEffect, useState } from 'react'

import {getBlogPosts, getPamphlets} from '../cms/api'

const promisePost = getBlogPosts()
const promisePam = getPamphlets()

function usePosts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        promisePost.then(blogPosts => {
            setPosts(blogPosts)
            setLoading(false)
        })
    }, [])

    return [posts, isLoading]
}

function usePamphlets() {
    const [pam, setPam] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        promisePam.then(pams => {
            setPam(pams)
            setLoading(false)
        })
    }, [])

    return [pam, isLoading]
}

export { usePosts, usePamphlets}

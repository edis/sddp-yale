import { useEffect, useState } from 'react'

import {getBlogPosts, getPamphlets, getPhotos} from '../cms/api'

const promisePost = getBlogPosts()
const promisePam = getPamphlets()
const promisePhotos = getPhotos()

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

function usePhotos() {
    const [photos, setPhotos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        promisePhotos.then(photos => {
            setPhotos(photos)
            setLoading(false)
        })
    }, [])

    return [photos, isLoading]
}

export { usePosts, usePamphlets, usePhotos }

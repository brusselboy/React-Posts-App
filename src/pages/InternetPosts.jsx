import React, {useEffect, useState} from 'react';
import PostSearch from "../components/PostSearch";
import {usePosts} from "../hooks/usePosts";
import PostFilter from "../components/PostFilter";
import PostsList from "../components/PostsList";
import HeaderLinks from "../UI/button/HeaderLinks";
import PostService from "../API/PostService";
import {getPageCount, getPagesArray} from "../utils/pages";

const InternetPosts = () => {
    const [posts, setPosts] = useState( [])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [isPostsLoading, setIsPostsLoading] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pagesArray = getPagesArray(totalPages)

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    async function fetchPosts() {
        const rand = Math.floor(Math.random() * 1000)
        setIsPostsLoading(true)
        setTimeout(async () => {
            const response = await PostService.getAll(limit, page)
            setPosts(response.data)
            const totalCount = response.headers['x-total-count']
            setTotalPages(getPageCount(totalCount, limit))
            setIsPostsLoading(false)
        }, rand)
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div>
            <div className="header">
                <HeaderLinks />
                <PostSearch filter={filter} setFilter={setFilter} />
            </div>
            <div className="main">
                {isPostsLoading
                    ?
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    :
                    !sortedAndSearchedPosts.length
                        ?
                        <h1 style={{textAlign: 'center', marginTop: '200px'}}>Посты не найдены!</h1>
                        :
                        <div>
                            <PostFilter filter={filter} setFilter={setFilter} />
                            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'Интернет посты'} />
                            <div className="pagination">
                                {pagesArray.map(p =>
                                    <span className={page === p ? 'btn__pagination btn__pagination__current': 'btn__pagination'} key={p} onClick={() => changePage(p)}>
                                        {p}
                                    </span>
                                )}
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default InternetPosts;
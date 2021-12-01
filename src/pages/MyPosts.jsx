import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import Button from "../UI/button/Button";
import PostSearch from "../components/PostSearch";
import Modal from "../UI/modal/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostsList from "../components/PostsList";
import HeaderLinks from "../UI/button/HeaderLinks";


const MyPosts = () => {
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem('posts')) || []
    )
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visibleModal, setVisibleModal] = useState(false)
    const [isPostsLoading, setIsPostsLoading] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        setIsPostsLoading(true)
        setTimeout(() => {
            setPosts(posts)
            setIsPostsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        setPosts(posts)
    }, [posts])
    updateLS()

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setVisibleModal(false)
        updateLS()
    }

    function updateLS() {
        localStorage.setItem('posts', JSON.stringify(posts))
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <div className="header">
                <HeaderLinks />
                <div className={'create__btn'}>
                    <Button children={'Создать пост'} onClick={() => setVisibleModal(true)} />
                </div>
                <PostSearch filter={filter} setFilter={setFilter} />
                <Modal visible={visibleModal} setVisible={setVisibleModal}>
                    <PostForm create={createPost} />
                </Modal>
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
                            <PostsList remove={removePost} posts={sortedAndSearchedPosts} title={'Мои посты'} />
                        </div>
                }
            </div>
        </div>
    );
};

export default MyPosts;
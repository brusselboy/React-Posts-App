import React, {useState} from 'react';
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()
        }

        if (post.title.trim() && post.body.trim()) {
            create(newPost)
        }

        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <Input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder={'Описание'}
                />
                <Input
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder={'Содержание'}
                />
                <Button children={'Создать'} onClick={addNewPost}/>
            </form>
        </div>
    );
};

export default PostForm;
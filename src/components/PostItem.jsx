import React from 'react';
import Button from "../UI/button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="content__post">
                <div>
                    <h3>{props.post.id}. {props.post.title}</h3>
                    <p>{props.post.body}</p>
                </div>
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </div>
    );
};

export default PostItem;
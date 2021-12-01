import React from 'react';

const PostSearch = ({filter, setFilter}) => {
    return (
        <div>
            <input
                className={'header__search'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Поиск...'}
            />
        </div>
    );
};

export default PostSearch;
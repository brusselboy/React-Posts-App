import React from 'react';
import Select from "../UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div className={'select'}>
                <Select
                    value={filter.sort}
                    defaultValue={'Сортировка'}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;
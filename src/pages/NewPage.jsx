import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPage = ({match}) => {

    const category = match.params.category || 'all';

    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    )
}

export default NewPage

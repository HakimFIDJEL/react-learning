import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useFetch } from '../hooks/useFetch';

import { Spinner } from '../components/Spinner.jsx';
import { Alert } from '../components/Alert.jsx';
import { Card } from '../components/Card.jsx';

export function Home()
{

    useDocumentTitle('Mon blog');

    const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')


    if (loading)
    {
        return <Spinner />
    }

    if (errors)
    {
        return <Alert children={errors.message} type='danger' />
    }

    

    return <>
    
        <h1 className='mb-3'>Home</h1>

        

        <div className="row gap-4">
            {data.map(post => (<div key={post.id} className='col-12 col-md-4'>
                <Card 
                    title = {post.title}
                    description = {post.body}
                    href = {`#single:${post.id}`}
                    buttonLabel = 'Voir plus'
                    image = {`https://picsum.photos/id/${post.id}/280/180`}
                />
            </div>))}
        </div>
        


        

    </>
}
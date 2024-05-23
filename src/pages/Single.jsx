import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useFetch } from '../hooks/useFetch';
import { useToggle } from '../hooks/useToggle';

import { Spinner } from '../components/Spinner.jsx';
import { Alert } from '../components/Alert.jsx';
import { Button } from '../components/Button.jsx';
import { Modal } from '../components/Modal.jsx';
import { EditPostModal } from './Single/EditPostModal';
 
export function Single({id})
{
    
    const {loading, data, errors, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    useDocumentTitle(data?.title || 'Chargement...');
    const [isEditing, toggleEdition] = useToggle(false)

    
    

    if (loading)
    {
        return <Spinner />
    }

    if (errors)
    {
        return <Alert children={errors.message} type='danger' />
    }

    const handleSave = (post) => {
        setData({...data, ...post});
    }


    return <>
    
        <h1 className='mb-3'>{data.title}</h1>
        <img className="img-fluid img-thumbnail my-3"  src={`https://picsum.photos/id/${id}/800/600`} alt="" />
        <p>{data.body}</p>

        {isEditing && <EditPostModal post={data} onClose={toggleEdition} onSave={handleSave}/> }

        <p>
            <Button variant='secondary' onClick={toggleEdition}>Editer l'article</Button>
            <Button variant='primary' href={`#single:${data.id + 1}`}>Article suivant</Button>
        </p>



    
    </>
}
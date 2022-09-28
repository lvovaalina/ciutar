import React, { useState } from 'react'
import Tweet from './Tweet'
import TweetForm from './TweetForm'
import { DeleteOutlined } from '@ant-design/icons'

const TweetWithUpdate = ({ tweet, onUpdate, onDelete }) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleUpdate = (tweet) => {
        onUpdate(tweet)

        setEdit(false)
    }

    return (!edit
        ? (<>
            <Tweet tweet={tweet}/>
            <button onClick={handleEdit}>Edit</button>
            <DeleteOutlined onClick={() => onDelete(tweet.id)}/>
        </>)
        : (<TweetForm tweet={tweet} onSubmit={handleUpdate} />)
    )

}

export default TweetWithUpdate
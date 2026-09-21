import { useState } from 'react'

import MainComponent from './components/MainComponent.jsx'
import RightSide from './components/RightSide.jsx'
import LeftSide from './components/LeftSide.jsx'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const filteredTweets = tweets.filter((tweet) => {
        return tweet.content.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    return (
        <div className="container">
            
            <LeftSide loggedInUser={loggedInUser} />



            <MainComponent
                tweets={filteredTweets}
                loggedInUser={loggedInUser}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
                addTweet={addTweet}
            />
            <RightSide
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

        </div>
    )
}

export default App

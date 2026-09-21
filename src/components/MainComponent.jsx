import CreateTweet from "./CreateTweet"
import TweetsComponent from "./TweetsComponent"

function MainComponent({ tweets, loggedInUser, createTweetContent, setCreateTweetContent, addTweet }) {
    return (
        <main>
            <div className='top-bar'>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet 
                loggedInUser={loggedInUser}
                createTweetContent={createTweetContent}
                setCreateTweetContent={setCreateTweetContent}
                addTweet={addTweet}
            />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            <TweetsComponent
                tweets={tweets}
            />
            
        </main>
    )
}
export default MainComponent
import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube.js'
import VideoList from './VideoList.js'

class App extends React.Component {

    state = {videos: [] }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })


        this.setState({
            videos: response.data.items
        })

    }
  

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
                {/* I have {this.state.videos.length} videos */}
                </div>
        )
    }
}

export default App
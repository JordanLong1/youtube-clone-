import React from 'react'

class SearchBar extends React.Component {

    state={term: ''}

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault(); 

        // to do: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term) // pass in state so our parent component knows what the search time is aka what we are searching for
    };

    render() {
        return (
        <div className="search-bar ui segment">
            
            <form onSubmit={this.onFormSubmit} className="ui form" >
                <div className="field" >
                    <label>Video Search</label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />

                </div>
            </form>

        </div>
        )
    }
}

export default SearchBar
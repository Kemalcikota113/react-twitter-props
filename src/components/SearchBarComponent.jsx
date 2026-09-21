function SearchBarComponent() {

    // Make the search bar functional so that it filters the list of tweets based on what is typed into the input
    return (
        <div className='search-section'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" type="text" placeholder="Search Twitter" />
        </div>
    )
}
export default SearchBarComponent
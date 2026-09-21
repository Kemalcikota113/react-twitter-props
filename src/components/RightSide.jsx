// function for right side component

import WidgetComponent from './WidgetComponent.jsx'
import SearchBarComponent from './SearchBarComponent.jsx'

function RightSide({ searchTerm, setSearchTerm }) {
    return (
        <aside className='right-side'>
            <SearchBarComponent
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <WidgetComponent />

            
        </aside>

    )
}

export default RightSide
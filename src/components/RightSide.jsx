// function for right side component

import WidgetComponent from './WidgetComponent.jsx'
import SearchBarComponent from './SearchBarComponent.jsx'

function RightSide() {
    return (
        <aside className='right-side'>
            <SearchBarComponent />
            <WidgetComponent />

            
        </aside>

    )
}

export default RightSide
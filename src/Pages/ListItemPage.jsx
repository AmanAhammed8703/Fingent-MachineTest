import React from 'react'
import ListItem from '../Components/ListItem/ListItem'
import TabsArray from '../Components/Tabs/TabsArray'
function ListItemPage() {
    return (
        <div>
            <TabsArray action="list" />
            <ListItem />

        </div>
    )
}

export default ListItemPage
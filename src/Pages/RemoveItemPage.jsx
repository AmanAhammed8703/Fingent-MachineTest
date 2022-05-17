import React from 'react'
import TabsArray from '../Components/Tabs/TabsArray'
import GetCount from '../Components/GetCount/GetCount'
function RemoveItemPage() {
    return (
        <div>
            <TabsArray action="remove" />
            <GetCount action="remove" />
        </div>
    )
}

export default RemoveItemPage
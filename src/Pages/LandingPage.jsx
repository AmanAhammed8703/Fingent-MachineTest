import React from 'react'
import TabsArray from '../Components/Tabs/TabsArray'
import GetCount from '../Components/GetCount/GetCount'
function LandingPage() {
  return (
    <div>
      <TabsArray action="add" />
      <GetCount action="add" />
    </div>
  )
}

export default LandingPage
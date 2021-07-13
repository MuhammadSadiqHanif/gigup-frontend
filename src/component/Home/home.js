import React from 'react'
import DiscoverGigs from '../discoverGigs/discoverGigs'
import LatestGigs from '../latestGigs/latestGigs'
import Tablelist from '../tableList/tablelist'

function Home() {
    return (
        <div>
             <DiscoverGigs />
          <LatestGigs />
          <Tablelist /> 
        </div>
    )
}

export default Home

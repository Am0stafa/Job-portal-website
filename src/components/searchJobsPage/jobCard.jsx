import React from 'react'
import classnames from "classnames";

import {

    Card,
    CardHeader,   
    CardBody,
    TabContent,
    TabPane
    
  
  } from "reactstrap";
const JobBox = () => {
    const [iconTabs, setIconsTabs] = React.useState(1);
    return (
 
    <div >
        <div className="mb-3">
    </div> 
    
        <Card>
          <CardHeader>
         <div>job 1</div>
          </CardHeader>
          <CardBody>
            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
              <TabPane tabId="link1">
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C
                  users after installed base benefits. <br />
                  <br />
                  Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                </p>
              </TabPane>
              <TabPane tabId="link2">
                <p>
                  Completely synergize resource taxing relationships via
                  premier niche markets. Professionally cultivate one-to-one
                  customer service with robust ideas. <br />
                  <br />
                  Dynamically innovate resource-leveling customer service
                  for state of the art customer service.
                </p>
              </TabPane>
              <TabPane tabId="link3">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables
                  for real-time schemas. <br />
                  <br />
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      
      </div>
    )
}

export default JobBox

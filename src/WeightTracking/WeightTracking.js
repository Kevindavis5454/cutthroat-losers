import React from 'react'
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryTooltip, VictoryLine, VictoryScatter } from 'victory'
import {Link} from "react-router-dom";
import "./WeightTracking.css"


class WeightTracking extends React.Component {
    render() {
        return (
            <div className='weight-tracker-box'>
                <h3>Starting Weight: 200</h3>

<VictoryChart viewBox="0, 0, width, height"
        containerComponent={<VictoryVoronoiContainer/>}
      >
          <VictoryGroup
            color="#c43a31"
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={[
              { x: "Week 1", y: 200 },
              { x: "Week 2", y: 198 },
              { x: "Week 3", y: 195 },
              { x: "Week 4", y: 192 }
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={({ active }) => active ? 8 : 3}
            />
          </VictoryGroup>
          <VictoryGroup
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={[
              { x: "Week 1", y: 189 },
              { x: "Week 2", y: 188 },
              { x: "Week 3", y: 186 },
              { x: "Week 4", y: 184 }
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={({ active }) => active ? 8 : 3}
            />
          </VictoryGroup>
       </VictoryChart>

                <h3>Current Weight: 184</h3>
                </div>
    );
    }
}
export default WeightTracking
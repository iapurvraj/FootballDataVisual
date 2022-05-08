import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3'
import PiChart from './components/piCharts';

interface Iprops {
  data?: number[]
}

function MyD3Component(props: Iprops) {

  const d3Container = useRef(null)

  useEffect(() => {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current)

      const update = svg
        .append('g')
        .selectAll('text')
        .data(props.data)

      update.enter()
        .append('text')
        .attr('x', (d, i) => i * 25)
        .attr('y', 40)
        .style('font-size', 24)
        .text((d: number) => d);

      update
        .attr('x', (d, i) => i * 40)
        .text((d: number) => d);

      update.exit()
        .remove();

    }
  }, [props.data, d3Container.current])

  return (
    <div className="App">
      <h1>D3 Visualization</h1>
      <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    </div>
  );
}


const App: React.FC = ()=>{
  return(
    <div>
      {/* <MyD3Component data={[1,2,3,6,4,2,6]}/> */}
      <PiChart />
    </div>
  )
}


export default App;

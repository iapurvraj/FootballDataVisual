import { select } from "d3-selection";
import React, { useEffect, useRef } from "react";

const PiChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(()=>{
        console.log(select(svgRef.current))
    })

    return (
        <div>
            <svg ref={svgRef} />
        </div>
    )
}


export default PiChart
import React, { Fragment,useEffect,useRef, useState } from 'react';
import classes from './BarChart.module.css';
import { select } from 'd3'
const BarChart = (props) => {
   
    const svgRef = useRef();
    const [data, setData] = useState([10,20,30,40,50,60,70,80])
    useEffect(() => {
        const svg = select(svgRef.current);
        svg
            .selectAll("circle")
            .data(data)
            .join(
                enter => enter.append("circle")
                .attr("r",value => value)
                .attr("cx",value => value*2)
                .attr("stroke","red")
                .attr("fill", "yellow")
                .attr("cy",value => value*2),
                update => update.attr("class", "updated"),
                exit => exit.remove(0)
            )
        return () => {
            
        }
    }, [svgRef])

    return (
        <Fragment>
            <svg height="300px" width="300px" ref={svgRef}></svg>
            <button onClick={(event) => {}}>+</button><button onClick={(event) => {}}>-</button>
        </Fragment>
    )
}

export default BarChart;
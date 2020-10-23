import { render } from '@testing-library/react';
import React, { Fragment } from 'react'

class Playground extends React.Component {
    constructor(props)
    {
        super(props);
        
    }

    componentDidMount(){
        var myCanvas = document.getElementById("canvas");
        var ctx = myCanvas.getContext("2d");
         ctx.fillStyle = "white";
         ctx.fillRect(150,400, 100, 100);
      ctx.fillStyle = "grey";

      ctx.font = "15pt sans-serif";
      ctx.fillText("Home", 160, 440);  
        var node = {
            x:150,
            y:400,
            w:100,
            h:100,
            text: "Home",
            fillStyle:"white",
            strokeStyle:"grey"
        }
        // this.textfill(ctx,node);
    };     

    render(){

        return (
            <Fragment>
            <div id="drawflow" onDrop={(e)=> this.props.fnDrop(e)} onDragOver={(e)=> this.props.fnAllowDrop(e)} className="playground" >
                {/* <button onClick={()=> createRect()}>Create rectangle </button> */}
                <canvas id="canvas" width="1260px" height="650px">
                
                </canvas>
                {/* {console.log(ctx)} */}
                <button class="openbtn"  onclick="openNav()">☰ Open Sidebar</button>  
            </div>

            </Fragment>
    )
    }

    
}

export default Playground

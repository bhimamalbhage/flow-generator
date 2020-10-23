import React from 'react'
import Playground from './Playground'
import Sidebar from './Sidebar'

function Main() {
    function drag(ev) {
        ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
        var data = ev.dataTransfer.getData("node");
        console.log("Dragged object is: "+ data);  
        
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("node");
      console.log("Dropped object is:- " + data);
      addNodeToDrawFlow(data, ev.clientX, ev.clientY);
      console.log(ev);
    }

    function addNodeToDrawFlow(name, posX, posY)
    {
        var box = `<div>
        <div class="title-box">${name}</div>
      </div>`;
      var c = document.getElementById("canvas");
        var con = c.getContext("2d");

         console.log("x pos: "+posX);
         console.log("y pos: "+posY);
         
         con.fillStyle = "white";
         let x = posX - 180;
         let y = posY - 100;
         console.log("x pos: "+x);
         console.log("y pos: "+y);
         con.fillRect(x,y, 100, 100);
         
        //  draw font in red
      con.fillStyle = "grey";
      con.font = "20pt sans-serif";
      con.fillText(name, x+20, y+30); 

    }

    return (
        <div className="wrapper">
            <Sidebar fnDrag = {drag}/>
             <Playground fnDrop={drop} fnAllowDrop = {allowDrop}/>
        </div>
    )
}

export default Main

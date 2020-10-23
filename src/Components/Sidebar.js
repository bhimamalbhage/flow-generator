import React from 'react'

function Sidebar(props) {
  
    return (
        <div className="sidebar">
            <div className="box-list" draggable="true" onDragStart={(e)=> props.fnDrag(e)} data-node="speak">
                <span>Speak</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=> props.fnDrag(e)} data-node="choice">
                <span>Choice</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="dtmf">
                <span>DTMF</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="record">
                <span>Record</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="api">
                <span>API</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="sms">
                <span>SMS</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="flow">
                <span>Flow</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="transfer">
                <span>Transfer</span>
            </div>
            <div className="box-list" draggable="true" onDragStart={(e)=>{props.fnDrag(e)}} data-node="hangup">
                <span>Hangup</span>
            </div>
         {/* <div style={{height:"50px",marginTop:"35px"}} onDrop={(e)=> props.fnDrop(e)} onDragOver={(e)=> props.fnAllowDrop(e)}>
             I am Drop
         </div> */}
        </div>
    )
}

export default Sidebar

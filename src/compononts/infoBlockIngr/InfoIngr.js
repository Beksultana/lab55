import React from 'react'

const InfoIngr = props => (
    <div className="infoIngr">
        <span className={'TitleNameIngr'}>{props.ingrName}</span>
        <button onClick={props.add} className={'btnAdd btn'}>{props.nameAdd}</button>
        <button onClick={props.remove} className={'btnRemove btn'}>{props.nameRemove}</button>
    </div>
)

export default InfoIngr
import React, { Fragment } from 'react'
import MoneyForm from'../components/MoneyForm'

const Table = (props) => {

  const renderPlates = () => {
    return props.plateArray.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <MoneyForm addMoney={props.addMoney}/>
      <div className="table">
        <div className="stack">
          {
            renderPlates([])
            /* renderPlates takes an array and renders an empty plate
            for every element in the array */
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
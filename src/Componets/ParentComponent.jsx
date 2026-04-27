import React from 'react'
import ChieldComponent from './ChieldComponent'

function ParentComponent() {
  return (
    <div> This is A ParentComponent

        <ChieldComponent  fname='Jon-deer' age=' 37'  cellNo="9988774455" isStudent='true'/>
    </div>
  )
}

export default ParentComponent
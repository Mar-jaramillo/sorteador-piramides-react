import React from 'react'
import Winner from './Winner'

export default function CombatWinners({pyramid}) {
  return (
    <div className="col-span-2  flex flex-col justify-around ">
    <Winner pyramid={pyramid} />
    <Winner pyramid={pyramid} />
    {pyramid===3 && <Winner pyramid={3} />}
  </div>
  )
}

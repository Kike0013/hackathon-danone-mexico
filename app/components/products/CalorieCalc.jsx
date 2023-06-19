import ProgressCircle from "./ProgressCircle"

const CalorieCalc = ({ remaining, consumed }) => {

  return (
    <div className="w-44">
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <div className="w-36 h-36 inline-block flex flex-col items-center justify-center">
          <ProgressCircle radius={40} stroke={4} progress={remaining} /> {/* fix progress */}
          <label>Remaining</label>
          <label>{remaining}</label>
        </div>
        <div className="w-36 h-36 rounded-full inline-block flex flex-col items-center justify-center">
          <ProgressCircle radius={40} stroke={4} progress={consumed} /> {/* fix progress */}
          <label>Consumed</label>
          <label>{consumed}</label>
        </div>
      </div>
    </div>
  )
}

export default CalorieCalc
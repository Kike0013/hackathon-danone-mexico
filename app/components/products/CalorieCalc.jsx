
const CalorieCalc = () => {
  return (
    <div className="w-44">
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <div className="border-4 border-d-violet-blue w-36 h-36 rounded-full inline-block flex flex-col items-center justify-center">
          <label>Remaining</label>
          <label>0</label>
        </div>
        <div className="border-4 border-d-violet-blue w-36 h-36 rounded-full inline-block flex flex-col items-center justify-center">
          <label>Consumed</label>
          <label>0</label>
        </div>
      </div>
    </div>
  )
}

export default CalorieCalc
import { useState } from "react"
import CalorieCalc from "./CalorieCalc"
import KcalInput from "./KcalInput"

const CalorieForm = ({ setFormCompleted }) => {

    const [max, setMax] = useState(0)
    const [sum, setSum] = useState({
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    })

    const remaining = max - Object.values(sum).reduce((a, b) => a + b, 0);
    const consumed = Object.values(sum).reduce((a, b) => a + b, 0);

    console.log(sum);

    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-4xl mb-2 text-d-violet-blue font-bold">Set your maximum calorie limit here!</h1>
            <h2 className="text-2xl mb-2 text-d-violet-blue">Complete the following information in order to have your food information</h2>
            <div className="flex gap-2">
                <form className="flex flex-col w-[700px] text-2xl mt-6">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-6 w-[500px]">
                            <div className="flex justify-between items-center border rounded-md bg-d-light-blue p-3 px-5">
                                <label>Maximun total daily calorie</label>
                                <input onChange={(e) => setMax(Number(e.target.value))} type="number" className="border border-2 rounded-lg w-24 p-4" />
                            </div>
                            <KcalInput label="Breakfast" setSum={setSum} sum={sum} value={"breakfast"} />
                            <KcalInput label="Lunch" setSum={setSum} sum={sum} value={"lunch"} />
                            <KcalInput label="Dinner" setSum={setSum} sum={sum} value={"dinner"} />
                            <KcalInput label="Snacks" setSum={setSum} sum={sum} value={"snakcs"} />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="border-2 rounded-xl flex flex-col gap-6 justify-center items-center py-6">
                                <CalorieCalc remaining={remaining} consumed={consumed} />
                                <button className="rounded-lg p-4 w-36 border-d-violet-blue hover:bg-[#10249F] hover:text-white">Send</button>
                            </div>
                            <button type="button" onClick={() => setFormCompleted(true)} className="text-sm mt-2">Skip to products</button>
                        </div>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default CalorieForm
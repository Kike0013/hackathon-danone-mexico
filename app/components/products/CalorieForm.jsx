import CalorieCalc from "./CalorieCalc"
import KcalInput from "./KcalInput"

const CalorieForm = () => {
    return (
        <div className="flex flex-col items-center pt-10">
            <h1 className="text-4xl mb-2 text-d-violet-blue font-bold">Set your maximum calorie limit here!</h1>
            <h2 className="text-2xl mb-2 text-d-violet-blue">Complete the following information in order to have your food information</h2>
            <div className="flex gap-2">
                <form className="flex flex-col w-[700px] text-2xl mt-6">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-6 w-[500px]">
                            <KcalInput label="Maximun total daily calorie" />
                            <KcalInput label="Breakfast" />
                            <KcalInput label="Lunch" />
                            <KcalInput label="Dinner" />
                            <KcalInput label="Snacks" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="border-2 rounded-xl flex flex-col gap-6 justify-center items-center py-6">
                                <CalorieCalc />
                                <button className="rounded-lg p-4 w-36 border-d-violet-blue hover:bg-[#10249F] hover:text-white">Send</button>
                            </div>
                        </div>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default CalorieForm
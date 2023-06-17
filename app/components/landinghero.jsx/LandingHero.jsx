
const LandingHero = () => {
    return (
        <div className="bg-[url('/images/hero.png')] h-fit bg-cover bg-no-repeat text-d-violet-blue flex justify-center">
            <div className="flex flex-col p-5 max-w-7xl my-96 text-center">
                <h1 className="text-6xl mb-2">Keep track of your daily calorie limit!</h1>
                <h3 className="text-xl mb-8">Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</h3>
                <button className="text-2xl p-4 border border-d-violet-blue rounded-xl w-fit ms-5 hover:bg-[#10249F] hover:text-white">Let's begin</button>
            </div>
        </div>
    )
}

export default LandingHero
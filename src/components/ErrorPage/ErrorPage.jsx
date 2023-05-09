import bgImg from '../../assets/scarecrow.png'

const ErrorPage = () => {
    return (
        <div className="container mx-auto p-4 ">
            {/* Logo start  */}
            <h1 className="lg:py-10 font-Inconsolata text-2xl font-bold uppercase">404 not found</h1>

            {/* main content start  */}
            <div className="flex flex-col md:flex-row lg:gap-64 pt-16 lg:py-60">
                {/* left side start  */}
                <div> 
                    <img src={bgImg} alt="scarecorow" className="h-96" />
                </div>
                {/* left side end */}

                {/* Right side start  */}
                <div className="pt-7">
                    <h1 className="font-Space_Mono font-bold text-6xl">I have bad news <br /> for you</h1>
                    <p className="lg:py-9 text-xl font-Space_Mono font-normal text-gray-500 py-8">The page you are looking <br />
                        for might be removed or is <br />
                        temporarily unavailable</p>

                    <button className="py-6 px-11 bg-black text-white text-sm font-Space_Mono font-medium uppercase">Back to homepage</button>
                </div>
                {/* Right side end */}
            </div>
        </div>
    );
};

export default ErrorPage;
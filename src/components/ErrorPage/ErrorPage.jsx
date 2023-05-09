const ErrorPage = () => {
    return (
        <div>
            {/* Logo start  */}
            <h1 className="">404 not found</h1>

            {/* main content start  */}
            <div>
                {/* left side start  */}
                <div> 
                    <img src="/src/assets/scarecrow.png" alt="scarecorow" className="h-96" />
                </div>
                {/* left side end */}

                {/* Right side start  */}
                <div>
                    <h1>I have bad news for you</h1>
                    <p>The page you are looking
                        for might be removed or is 
                        temporarily unavailable</p>\

                    <button>Back to homepage</button>
                </div>
                {/* Right side end */}
            </div>
        </div>
    );
};

export default ErrorPage;
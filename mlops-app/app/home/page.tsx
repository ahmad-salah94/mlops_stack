import Home from './home';

export default function HomePage() {
    return (
        <section >
            <div className="relative z-20 flex flex-1 flex-col items-centers justify-center">
                <h1 className="flex items-center justify-center text-[52px] font-[700] leading-[120%] lg:text-[70px] lg:font-[700] lg:leading-[120%]"></h1>
                <Home />
            </div>
        </section>
    )
}
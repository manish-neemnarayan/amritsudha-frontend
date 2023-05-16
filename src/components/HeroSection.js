import companyLogoTrans from "../images/logo-amritsudha-tp.png"
const HeroSection = function() {
    return(
        <>
        <div className="
            md:h-[75vh]
            h-full
            w-full
            flex
            flex-col
            items-center justify-center
            bg-gray-700
            pt-4
            md:pb-8
        ">
            <h1 className="
                md:text-6xl
                text-3xl
                text-orange-400
                p-4
                shadow-xl
                rounded-lg
                pt-16
                text-center
            ">AMRITSUDHA FEDERATION</h1>
            <h1 className="
                text-3xl
                text-orange-400
                p-4
                shadow-xl
                rounded-lg
                mt-4
                font-bold
            ">अमृतसुधा</h1>
            <p className="
                text-xl
                text-white
                p-2
                pt-12
                pb-12
                rounded-lg
                mt-4
                text-center
                font-bold
                opacity-50
            ">Website is related to finance to small organisations to provide loan</p>
            <img src={companyLogoTrans} alt="transparent logo" className="w-32" />
        </div>
        </>
    )
}

export default HeroSection;
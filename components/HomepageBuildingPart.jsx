const HomepageBuildingPart = ({typeOfPage = 'home'}) => {
    return(
    <div className={`lg:w-[45vw] lg:max-w-[920px] ${typeOfPage === "home" ? "relative w-full h-fit" : 'flex-center w-[95vw] h-full max-lg:px-3'}`}>
        {typeOfPage === 'home' ? 
        <>
            <div className="aspect-5/4 w-[95dvw] bg-[url(/Images/purple_building.png)] rounded-xl bg-cover bg-top lg:w-[45vw] lg:aspect-square lg:rounded-none lg:max-w-[920px] lg:max-h-[815px]" />
            <div className="absolute aspect-square h-fit w-[117px] -bottom-[40px] bg-[url(/Images/building_badge.png)] bg-cover bg-center lg:w-[129px] lg:-left-[65px] lg:top-15 xl:w-[175px]" />
        </>
        :
        <>
            <div className="aspect-5/4 w-[95dvw] border-2 border-grey-15 bg-[url(/Images/house_hand_new.png)] rounded-xl bg-cover bg-top lg:h-[425px] xl:h-[550px] lg:aspect-4/3 xl:my-6" />
        </>
        }
        
    </div>)
}

export default HomepageBuildingPart;
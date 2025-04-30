const HeroSectionPropInfo = ({num, text}) => {
    return(<div className="flex-col-center w-full h-[90px] bg-grey-10 rounded-lg border-2 border-grey-15 lg:h-[100px] xl:h-[120px] lg:flex-col-center-start lg:px-4">
        <h3 className="font-h3">{num}</h3>
        <p className="font-paragraph text-grey-60">{text}</p>
    </div>)
}

export default HeroSectionPropInfo;
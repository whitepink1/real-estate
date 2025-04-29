const { default: Image } = require("next/image")

const SocialMediaLink = ({url, name}) => {
    return(<div className="flex-center w-[60px] h-[60px] bg-grey-08 rounded-full cursor-pointer lg:w-[40px] lg:h-[40px] xl:w-[52px] xl:h-[52px]">
        <Image src={url} height={20} width={20} alt={`${name} Link`} />
    </div>)
}

export default SocialMediaLink;
import Image from "next/image";

const SubscribeNews = () => {
    return(<div className="relative w-[357px] h-[52px] lg:w-[500px] xl:w-[425px] xl:h-[66px]">
        <span className="absolute left-5 top-4.5 h-[20px] w-[20px] bg-[url(/icons/heroicons-outline/envelope.png)] bg-cover bg-center opacity-70 xl:top-6"></span>
        <input type="email" placeholder="Enter Your Email" className="w-full h-full px-12 text-white rounded-xl border-2 border-grey-15 placeholder:font-paragraph placeholder:text-grey-60" />
        <button className="absolute right-5 top-3.5 hover:scale-105 xl:top-5.5"><Image src="/icons/heroicons-solid/paper-to-moon.png" width={24} height={24} alt="Subsription Newsletter Button"/></button>
    </div>)
}

export default SubscribeNews;
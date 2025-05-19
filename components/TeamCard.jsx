"use client";
import { TeamData } from "@/constants/constant";
import Image from "next/image";
import { useState } from "react";

const TeamCard = () => {
    return(<div className="flex-col-center w-[92vw] mx-auto my-10 gap-y-5 md:grid md:grid-cols-2 md:gap-5 lg:my-20 xl:grid-cols-3 2xl:grid-cols-4">
        {TeamData.map((item, index) => {
            const [message, setMessage] = useState("");
            const handleChange = (e) => {
            setMessage(e.target.value);
            }
            return (
            <div key={item.name} className="flex-col-center w-full py-5 gap-y-10 rounded-xl border-2 border-grey-15">
                <div className="relative w-[90%] h-[250px] aspect-video">
                    <Image className=" object-cover object-top rounded-xl" src={item.img} fill alt={item.position}/>
                </div>
                <div className="flex-col-center w-full gap-y-4">
                    <div className="flex-col-center gap-y-2">
                        <h4 className="font-cards-sm">{item.name}</h4>
                        <p className="font-paragraph text-grey-60">{item.position}</p>
                    </div>
                    <div className="relative w-[280px] h-16">
                        <input onChange={handleChange} value={message} type="text" placeholder="Say Hello 👋" className="w-full h-full bg-grey-10 font-paragraph text-white py-2 pl-6 pr-14 rounded-full"/>
                        <button onClick={() => setMessage("")} className="absolute right-3 top-2 hover:scale-[102%] cursor-pointer">
                            <Image src="/icons/send_message.svg" height={48} width={48} alt="Send message"/>
                        </button>
                    </div>
                </div>
            </div>
        )})}
    </div>)
}

export default TeamCard;
"use client"
import { PropertyFormData } from "@/constants/constant";
import SelectOption from "./Shared/SelectOption";
import { useState } from "react";
import Image from "next/image";

const PropertiesForm = () => {
    const [method, setMethod] = useState('phone');

    return(<div className="w-[95vw] mx-auto border-2 border-grey-15 rounded-xl lg:w-[92vw]">
        <form className="w-full p-5">
            <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-4 lg:gap-7">
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white">First Name</label>
                    <input required maxLength={20} type="text" placeholder="Enter First Name" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
                </div>
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white">Last Name</label>
                    <input required maxLength={20} type="text" placeholder="Enter Last Name" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
                </div>
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white">Email</label>
                    <input required type="email" placeholder="Enter your Email" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
                </div>
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white">Phone</label>
                    <input required type="tel" maxLength={15} placeholder="Enter Phone Number" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
                </div>
                {PropertyFormData.map((item) => (
                    <div key={item.label} className={`${item.label === 'Budget' ? 'col-span-2' : ''} flex-col-start gap-y-2.5`}>
                        <label className="font-paragraph-md text-white">{item.label}</label>
                        <SelectOption name={item.name} options={item.options}/>
                    </div>
                ))}
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white">Preferred Contact Method</label>
                    <div className={`flex items-center relative w-full px-4 h-[52px] bg-grey-10 border-2 ${method === 'phone' ? 'border-purple-65' : 'border-grey-15'} rounded-xl`}>
                        <Image className="mr-2 border-r-2 pr-1 border-grey-15 aspect-square" src="/icons/phone.svg" height={25} width={25} alt="Phone input" />
                        <input type="tel" maxLength={15} placeholder="Enter Phone Number" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 focus:outline-none"/>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={method === 'phone'}
                            onChange={() => setMethod('phone')}
                            className="accent-purple-60"
                            />
                    </div>                
                </div>
                <div className="flex-col-start gap-y-2.5">
                    <label className="font-paragraph-md text-white max-lg:hidden"></label>
                    <div className={`flex items-center relative w-full px-4 h-[52px] bg-grey-10 border-2 ${method === 'email' ? 'border-purple-65' : 'border-grey-15'} rounded-xl`}>
                        <Image className="mr-2 border-r-2 pr-1 border-grey-15 aspect-square" src="/icons/email.svg" height={25} width={25} alt="Email input" />
                        <input type="email" placeholder="Enter Your Email" className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 focus:outline-none"/>
                        <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={method === 'email'}
                            onChange={() => setMethod('email')}
                            className="accent-purple-60"
                            />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 mt-7">
                <label className="font-paragraph-md text-white">Message</label>
                <textarea  placeholder="Enter your Message here..."
                           className="w-full min-h-[100px] py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>
            <div className="flex-col-start gap-y-5 w-full mt-7 lg:flex-between">
                <p className="font-paragraph text-grey-60">
                    <input type="checkbox" className="w-[25px] h-fit"/>I agree with <span className="underline underline-offset-1">Terms of Use</span> and <span className="underline underline-offset-1">Privacy Policy</span>
                </p>
                <button href="/" className="flex-center w-full h-full px-8 py-4 font-paragraph text-white bg-purple-60 rounded-lg lg:w-[300px]">Send Your Message</button>
            </div>
        </form>
    </div>)
}

export default PropertiesForm;
"use client"
import { PropertyFormData } from "@/constants/constant";
import SelectOption from "./Shared/SelectOption";
import { useState } from "react";

const PropertyDetailsForm = ({name, addClass}) => {
    const location = PropertyFormData[0].options;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
        selectedProperty: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
        selectedProperty: "",
        });
    };

    console.log(location)
    return(<form onSubmit={handleSubmit} className={`w-full h-fit p-5 ${addClass}`}>
        <div className="grid grid-cols-1 gap-y-5 p-4 border-2 border-grey-15 rounded-xl xl:grid-cols-2 xl:gap-5">
            <div className="flex-col-start gap-y-2.5">
                <label className="font-paragraph-md text-white">First Name</label>
                <input 
                    required 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    maxLength={20} 
                    type="text" 
                    placeholder="Enter First Name" 
                    className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>
            <div className="flex-col-start gap-y-2.5">
                <label className="font-paragraph-md text-white">Last Name</label>
                <input 
                    required 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    maxLength={20} 
                    type="text" 
                    placeholder="Enter Last Name" 
                    className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>
            <div className="flex-col-start gap-y-2.5">
                <label className="font-paragraph-md text-white">Email</label>
                <input 
                    required 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={20} 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>
            <div className="flex-col-start gap-y-2.5">
                <label className="font-paragraph-md text-white">Phone</label>
                <input 
                    required 
                    maxLength={20} 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number" 
                    className="w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>
            <div className='flex-col-start gap-y-2.5 xl:col-span-2'>
                <label className="font-paragraph-md text-white">Selected Property</label>
                <SelectOption
                    onChange={handleChange}  
                    name={name} 
                    options={location}
                    fieldName="selectedProperty"/>
            </div>  
            <div className="flex flex-col gap-y-4 xl:col-span-2">
                <label className="font-paragraph-md text-white">Message</label>
                <textarea  
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your Message here..."
                    className="w-full min-h-[100px] py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
            </div>   
            <div className="flex-col-start gap-y-5 w-full lg:flex-between xl:col-span-2">
                <p className="font-paragraph text-grey-60">
                    <input  
                        required 
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}  
                        type="checkbox" 
                        className="w-[25px] h-fit"/>I agree with <span className="underline underline-offset-1">Terms of Use</span> and <span className="underline underline-offset-1">Privacy Policy</span>
                </p>
                <button href="/" type="submit" className="flex-center w-full h-full px-8 py-4 font-paragraph text-white bg-purple-60 rounded-lg lg:w-[300px]">Send Your Message</button>
            </div>       
        </div>
    </form>)
}

export default PropertyDetailsForm;
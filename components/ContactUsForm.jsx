"use client";

import { ContactFormData } from "@/constants/constant";
import { useState } from "react";
import FormInput from "./Shared/FormInput";
import FormSelect from "./Shared/FormSelect";
import FormMessage from "./Shared/FormMessage";
import FormSubmitButton from "./Shared/FormSubmitButton";

const ContactUsForm = () => {
    

    const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inqueryType: "",
            refferedFrom: "",
            message: "",
            agree: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inqueryType: "",
            refferedFrom: "",
            message: "",
            agree: false,
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return(<form onSubmit={handleSubmit} className={`w-[95vw] h-fit mx-auto p-5 lg:w-[92vw]`}>
        <div className="grid grid-cols-1 gap-y-5 p-4 border-2 border-grey-15 rounded-xl lg:p-20 lg:gap-7.5 lg:grid-cols-2 xl:grid-cols-3">
            <FormInput 
                title="First Name"
                req={true} 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange}
                maxLength={20} 
                type="text"
                placeholder="Enter First Name" 
                addClass = ""/>
            <FormInput 
                title="Last Name"
                req={true} 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange}
                maxLength={20} 
                type="text"
                placeholder="Enter Last Name" 
                addClass = ""/>
            <FormInput 
                title="Email"
                req={true} 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                maxLength={20} 
                type="email"
                placeholder="Enter your email" 
                addClass = ""/>
            <FormInput 
                title="Phone"
                req={true} 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                maxLength={20} 
                type="text"
                placeholder="Enter Phone Number" 
                addClass = ""/>
            <FormSelect 
                title="Inquery Type" 
                onChange={handleChange} 
                placeholder="Select Iquery Type" 
                options={ContactFormData[0]}
                fieldName="inqueryType" />
            <FormSelect 
                title="How did you Hear About Us?" 
                onChange={handleChange} 
                placeholder="Select" 
                options={ContactFormData[1]}
                fieldName="refferedFrom" />
            <FormMessage
                title="Message" 
                req={false} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your Message here..."
                addclass= "lg:col-span-2 xl:col-span-3"/>
            <FormSubmitButton
                req={true} 
                name="agree"
                checked={formData.agree} 
                onChange={handleChange} 
                buttonText="Send Your Message" 
                addClass="lg:col-span-2 xl:col-span-3" />      
        </div>
    </form>)
}

export default ContactUsForm;
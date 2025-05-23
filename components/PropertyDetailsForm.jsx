"use client"
import { PropertyFormData } from "@/constants/constant";
import { useState } from "react";
import FormInput from "./Shared/FormInput";
import FormSelect from "./Shared/FormSelect";
import FormMessage from "./Shared/FormMessage";
import FormSubmitButton from "./Shared/FormSubmitButton";

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

    return(<form onSubmit={handleSubmit} className={`w-full h-fit p-5 ${addClass}`}>
        <div className="grid grid-cols-1 gap-y-5 p-4 border-2 border-grey-15 rounded-xl xl:grid-cols-2 xl:gap-5">
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
                title="Selected Property" 
                onChange={handleChange} 
                placeholder={name} 
                options={location}
                fieldName="selectedProperty"
                addClass="xl:col-span-2" />
            <FormMessage
                title="Message" 
                req={false} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your Message here..."
                addclass= "xl:col-span-2 "/>
            <FormSubmitButton
                req={true} 
                name="agree"
                checked={formData.agree} 
                onChange={handleChange} 
                buttonText="Send Your Message" 
                addClass="xl:col-span-2 " />      
        </div>
    </form>)
}

export default PropertyDetailsForm;
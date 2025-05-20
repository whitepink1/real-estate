"use client";
const FormInput = ({title = "", req = false, name = "", value = "", onChange = () => {}, maxLength = 20, type = "", placeholder = "", addClass = ""}) => {
    return(<div className="flex-col-start gap-y-2.5">
        <label className="font-paragraph-md text-white">{title}</label>
        <input 
            required={req}
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength} 
            type={type} 
            placeholder={placeholder} 
            className={`w-full py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none ${addClass}`}/>
    </div>)
}

export default FormInput;
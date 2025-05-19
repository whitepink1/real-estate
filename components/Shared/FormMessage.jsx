const FormMessage = ({title = "", req = false, name = "", value = "", onChange = () => {}, placeholder = "", addclass = ""}) => {
    return(
        <div className={`flex flex-col gap-y-4 ${addclass}`}>
            <label className="font-paragraph-md text-white">{title}</label>
            <textarea  
                required={req}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full min-h-[125px] py-4 px-5 rounded-lg font-paragraph text-white placeholder:text-grey-60 bg-grey-10 border-1 border-grey-15 focus:outline-none"/>
        </div>)
}

export default FormMessage;
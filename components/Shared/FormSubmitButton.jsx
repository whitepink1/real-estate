"use client"
const FormSubmitButton = ({req = true, name, checked = false, onChange, buttonText, addClass}) => {
    return(
        <div className={`flex-col-start gap-y-5 w-full lg:flex-between ${addClass}`}>
                <p className="font-paragraph text-grey-60">
                    <input  
                        required={req} 
                        name={name}
                        checked={checked}
                        onChange={onChange}  
                        type="checkbox" 
                        className="w-[25px] h-fit"/>I agree with <span className="underline underline-offset-1">Terms of Use</span> and <span className="underline underline-offset-1">Privacy Policy</span>
                </p>
            <button type="submit" className="flex-center w-full h-full px-8 py-4 font-paragraph text-white bg-purple-60 rounded-lg lg:w-[300px]">{buttonText}</button>
        </div>)
}

export default FormSubmitButton;
import Link from "next/link";

const QuestionCard = ({property}) => {
    const {id, question, info} = property;
    // return(<div className="h-[400px] w-full">
    //     <div className="flex flex-col justify-between h-full w-full p-7 rounded-xl border-2 border-grey-15 lg:p-10">
    //       <h3 className="font-cards-sm">{question}</h3>
    //       <p className="font-paragraph text-grey-60">{info}</p>
    //       <Link
    //         href="/"
    //         className="flex-center w-full h-12 rounded-xl font-cards-md font-normal bg-grey-10 border-2 border-grey-15"
    //       >
    //         Read More
    //       </Link>
    //     </div>
    //   </div>)
    return(<div className="mx-auto h-[300px] lg:px-2 lg:py-4 lg:h-[400px]">
        <div className="flex-col-between-start h-full max-lg:w-[95%] max-lg:mx-auto p-7 rounded-xl border-2 border-grey-15 lg:p-10">
            <h3 className="font-cards-sm ">{question}</h3>
            <p className="font-paragraph text-grey-60">{info}</p>
            <Link href="/" className="flex-center w-full h-12 rounded-xl font-paragraph-md text-white font-normal bg-grey-10 border-2 border-grey-15 lg:w-[125px]">Read More</Link>
        </div>
    </div>)
}

export default QuestionCard;
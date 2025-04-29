import Link from "next/link";

const FooterNavBar = ({title, data}) => {
    return(<div className="flex-col-start gap-y-3 w-[160px] h-fit max-lg:border-b-1 max-lg:border-grey-15 pb-3 xl:w-fit">
        <p className="font-paragraph-md text-grey-60 pt-2">{title}</p>
        {data.map((item) => (
            <Link href={item.url} key={item.name} className="font-paragraph text-white">
                {item.name}
            </Link>
        ))}
    </div>)
}

export default FooterNavBar;
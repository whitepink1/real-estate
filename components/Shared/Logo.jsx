import Link from "next/link";

const Logo = () => {
    return(<Link href="/" className="w-[94px] h-[28px] bg-[url(/logo_sm.png)] bg-cover bg-center lg:w-[115px] lg:h-[35px] lg:bg-[url(/logo_md.png)] xl:w-[160px] xl:h-[48px] xl:bg-[url(/logo_lg.png)]">
    </Link>)
}

export default Logo;
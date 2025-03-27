import { geistSans } from "@/config/fonts";

interface Props{
  title: string;
  className?: string;
}

const Title = ({title, className}: Props) => {
  return (
    <div className={`mt-3 ${className} `}>
      <h1 className={`${geistSans.className} antialiased font-extrabold w-fit text-3xl bg-linear-90 from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text`}>{title}</h1>
    </div>
  )
}

export default Title
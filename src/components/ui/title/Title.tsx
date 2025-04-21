import { geistSans } from "@/config/fonts";

interface Props{
  title: string;
  className?: string;
}

const Title = ({title, className}: Props) => {
  return (
    <div className={`mt-3 ${className} `}>
      <h1 className={`${geistSans.className} antialiased font-extrabold w-fit text-3xl text-transition`}>{title}</h1>
    </div>
  )
}

export default Title
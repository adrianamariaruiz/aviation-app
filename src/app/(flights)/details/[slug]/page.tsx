// import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}

const pageDetails = ({params}:Props) => {
  const{slug} = params;

  // if(!slug) return notFound();

  return (
    <div>pageDetails {slug}</div>
  )
}

export default pageDetails
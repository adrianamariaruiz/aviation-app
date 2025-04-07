// import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}


const pageDetails = ({params}:Props) => {
  const{id} = params;

  // if(!id) return notFound();

  return (
    <>
      <div>pageDetails {id}</div>
    </>
  )
}

export default pageDetails
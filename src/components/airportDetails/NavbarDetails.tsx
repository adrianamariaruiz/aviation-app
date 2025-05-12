import Link from "next/link"

interface Props {
  id: string; 
}

const NavbarDetails = ({id}:Props) => {
  return (
    <div className="flex justify-between py-5 px-5 text-primary-400! max-w-5xl border border-white rounded-lg shadow-md bg-gradient mb-10">
        <Link className="font-bold hover:text-white" href={ `/details/${id}` }>General</Link>
        <Link className="font-bold hover:text-white" href={ `/details/${id}/location` }>Ubicación</Link>
        <Link className="font-bold hover:text-white" href={ `/details/${id}/time-zone` }>Zona horaria</Link>
    </div>
  )
}

export default NavbarDetails
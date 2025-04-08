import Link from "next/link"

const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[650px] w-full justify-center items-center align-middle">
    <div className="text-center px-5">
      <h2 className="antialiased text-5xl pb-2">404 Not Found</h2>
      <Link href="/" className="hover:underline transition-all">
        Regresar a la página principal
      </Link>
    </div>
  </div>
  )
}

export default PageNotFound
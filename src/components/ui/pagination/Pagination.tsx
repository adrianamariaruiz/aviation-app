'use client'

import { paginationNumbers } from "@/components/util/paginationNumbers";
import Link from "next/link";
import {usePathname, useSearchParams } from "next/navigation";


interface Props {
  totalPages: number;
}

const Pagination = ({ totalPages }: Props) => {

  const pathName = usePathname();
  const searchParams = useSearchParams();

  const pageString = Number(searchParams.get('page')) ?? 1;
  const currentPage = isNaN(pageString) ? 1 : pageString;

  const allPagination = paginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`;
    }
    if (Number(pageNumber) <= 0) {
      return `${pathName}`;
    }
    if (Number(pageNumber) > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  }

  return (
    <div className="flex justify-center mb-4">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className={`page-item  ${currentPage <= 1 ? 'disabled pointer-events-none focus:shadow-none text-gray-600' : 'text-gray-300'}`}>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-gray-200 focus:shadow-md'
              href={createPageUrl(currentPage - 1)} >Previous</Link>
          </li>

          {
            allPagination.map((pageNumber, index) =>
              (
                <li className="page-item" key={pageNumber + '-' + index}>
                  <Link
                    className={`page-link relative block py-1.5 px-3 border-0  outline-none transition-all duration-300 rounded   focus:shadow-md ${pageNumber === currentPage ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-300 hover:text-gray-800 hover:bg-gray-200'}`}
                    href={createPageUrl(pageNumber)}>{pageNumber}</Link>
                </li>
              )
            )
          }

          <li className={`page-item  ${currentPage >= totalPages ? 'disabled pointer-events-none focus:shadow-none text-gray-600' : 'text-gray-300'}`}>
            <Link
              className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:text-gray-800 hover:bg-gray-200 focus:shadow-md'
              href={createPageUrl(currentPage + 1)}>Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination

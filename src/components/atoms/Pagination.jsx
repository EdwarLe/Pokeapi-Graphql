import PropTypes from 'prop-types'
const FIRST_PAGE = 1

const Pagination = ( { lastPages, pagesInCurrentBlock, setCurrentPage, currentPage }) => {

    const handleFirstPage = () => setCurrentPage(FIRST_PAGE)

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => {
            const newPage = prevPage - 1
            if(newPage >= FIRST_PAGE) return newPage
            return prevPage
        })
    }

    const handleLastPage = () => setCurrentPage(lastPages)

    const handleNextPage = () => {
        setCurrentPage((prevState) => {
            const newPage = prevState + 1
            if(newPage <= lastPages) return newPage
            return prevState
        })
    }

    return (
        <ul className="pagination">
            {currentPage >= 2 && <li onClick={handleFirstPage}><i className='bx bx-chevrons-left'></i></li>}
            {currentPage >= 2 && <li onClick={handlePreviousPage}><i className='bx bx-chevron-left' ></i></li>}
            {pagesInCurrentBlock.map(page => <li key={page} onClick={(() => setCurrentPage(page))}>{page}</li>)}
            {currentPage <= lastPages - FIRST_PAGE && <li onClick={handleNextPage}><i className='bx bx-chevron-right'></i></li>}
            {currentPage <= lastPages - FIRST_PAGE && <li onClick={handleLastPage}><i className='bx bx-chevrons-right'></i></li>}
        </ul>
    )
}

Pagination.propTypes = {
    lastPages: PropTypes.number,
    pagesInCurrentBlock: PropTypes.array,
    setCurrentPage: PropTypes.any,
    currentPage: PropTypes.number
}
export default Pagination
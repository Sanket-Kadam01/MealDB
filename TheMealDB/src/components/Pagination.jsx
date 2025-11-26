export default function Pagination({ page, total, onPageChange, size = 10 }) {
    const totalPages = Math.ceil(total / size);

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => onPageChange(page - 1)}>Previous</button>
                </li>
                <li className="page-item disabled">
                    <span className="page-link">{page + 1} / {totalPages}</span>
                </li>
                <li className={`page-item ${page + 1 >= totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => onPageChange(page + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
}

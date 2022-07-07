const ProductCount = ({count}) => {
    return(
        <div className="mt-2 mb-2">
            <button type="button" className="btn btn-primary position-relative rounded-pill">
                Count
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{count > 0 ? count : 0}<span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default ProductCount;
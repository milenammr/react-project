import style from "./Modal.module.css";

// eslint-disable-next-line react/prop-types
function ErrorModal({errorMessage, onClose}) {
    return (
        <div className={style.myModal} tabIndex={-1} id="ConfirmDeleteModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Something get wrong!</h5>
                    <div
                        className="btn btn-icon btn-sm btn-close ms-2"
                        aria-label="Close"
                        onClick={onClose}
                    >
                    </div>
                </div>
                <div className="modal-body">
                    <p>{errorMessage}</p>
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={onClose}>
                    Ok
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;
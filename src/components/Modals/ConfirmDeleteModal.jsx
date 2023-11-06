// eslint-disable-next-line react/prop-types
import style from "./ConfirmDeleteModal.module.css";

export default function ConfirmDeleteModal({onDelete, onClose}) {
    return (
        <div className={style.myModal} tabIndex={-1} id="ConfirmDeleteModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Delete property</h5>
                    <div
                        className="btn btn-icon btn-sm btn-close ms-2"
                        aria-label="Close"
                        onClick={onClose}
                    >
                    </div>
                </div>
                <div className="modal-body">
                    <p>You are about to delete this property? Are you sure?</p>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn"
                        onClick={onClose}
                    >
                    Cancel
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={onDelete}>
                    Yes, delete
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
function Modal(ID, content) {
    //console.log("Creating modal with ID = " + ID);
    let thisModal = (
        <div className="modal" tabIndex="-1" id={ID}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ID}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{content}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

    //let container = document.querySelector("modal-body");
    //console.log("container is v4 " + container);
    //container.innerHTML = content;

    return thisModal;
} // End function Modal(). 

export default Modal;
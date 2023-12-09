// eslint-disable-next-line react/prop-types
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";
import * as service from "../../services/propertiesService";
import style from "./Modal.module.css";
import ErrorModal from "../Modals/ErrorModal";

const FormKyes = {
    Title: 'title',
    Price: 'price',
    ImgUrl: 'imgUrl',
    Address: 'address',
    Dimension: 'dimension',
    Beds: 'beds',
    Bath: 'bath',
    Tag: 'tag',
    Kind: 'kind',
    Amenities: 'amenities',
    Description: 'description'
};

// eslint-disable-next-line react/prop-types
function EditPropertyModal({id, onEdit, onClose}) {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        service.getOne(id)
            .then(result => {
                setValues(result);
            });
    }, [id]);

    const validationRules = {
        [FormKyes.Title]: { required: true },
        [FormKyes.Price]: { required: true, notNegative: true },
        [FormKyes.ImgUrl]: { required: true, imageUrl: true },
        [FormKyes.Address]: { required: true },
        [FormKyes.Dimension]: { required: true, notNegative: true},
        [FormKyes.Beds]: { required: true, notNegative: true },
        [FormKyes.Bath]: { required: true, notNegative: true },
        [FormKyes.Tag]: { required: true },
        [FormKyes.Kind]: { required: true },
    };

    async function formSubmitHandler(data) {
        try {
            const result = await service.edit(id, data);
            onEdit(result); //return edited property 
            onClose();
            
        } catch (error) {
            setShowErrorModal(true)
            setErrorMessage(`${error.code} ${error.message}`)
        }
    }

    const { values, onChange, errors, onSubmit, setValues } = useForm(formSubmitHandler, {
        [FormKyes.Title]: '',
        [FormKyes.Price]: '',
        [FormKyes.ImgUrl]: '',
        [FormKyes.Address]: '',
        [FormKyes.Dimension]: '',
        [FormKyes.Beds]: '',
        [FormKyes.Bath]: '',
        [FormKyes.Tag]: '',
        [FormKyes.Kind]: '',
        [FormKyes.Amenities]: '',
        [FormKyes.Description]: '',
        },
        validationRules
    );

    return (
        <>
            {showErrorModal && (<ErrorModal errorMessage={errorMessage} onClose={() => setShowErrorModal(false)}/>)}
            <div className={style.myModal} tabIndex={-1} id="EditPropertyModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit property</h5>
                        <div
                            className="btn btn-icon btn-sm btn-close ms-2"
                            aria-label="Close"
                            onClick={onClose}
                        >
                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                    <div className="modal-body">
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="title" 
                                    name="title"
                                    placeholder="Title"
                                    onChange={onChange}
                                    value={values[FormKyes.Title]}
                                    />
                                    <label htmlFor="title">Title<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Title] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Title]}</p>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <select 
                                    className="form-select" 
                                    id="tag" 
                                    name="tag"
                                    placeholder="Tag"
                                    onChange={onChange}
                                    value={values[FormKyes.Tag]}
                                    >
                                        <option></option>
                                        <option value="For Sell">For Sell</option>
                                        <option value="For Rent">For Rent</option>
                                    </select>
                                    <label htmlFor="tag">Tag<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Tag] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Tag]}</p>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <select 
                                    className="form-select" 
                                    id="kind" 
                                    name="kind"
                                    placeholder="Kind"
                                    onChange={onChange}
                                    value={values[FormKyes.Kind]}
                                    >
                                        <option></option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Villa">Villa</option>
                                        <option value="Home">Home</option>
                                        <option value="Office">Office</option>
                                        <option value="Building">Building</option>
                                        <option value="Townhouse">Townhouse</option>
                                        <option value="Shop">Shop</option>
                                        <option value="Garage">Garage</option>
                                    </select>
                                    <label htmlFor="kind">Kind<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Kind] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Kind]}</p>}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="imgUrl" 
                                    placeholder="Image URL"
                                    name="imgUrl"
                                    onChange={onChange}
                                    value={values[FormKyes.ImgUrl]}
                                    />
                                    <label htmlFor="imgUrl">Image URL<span className="text-danger">*</span></label>
                                    {errors[FormKyes.ImgUrl] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.ImgUrl]}</p>}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="address" 
                                    placeholder="Address"
                                    name="address"
                                    onChange={onChange}
                                    value={values[FormKyes.Address]}
                                    />
                                    <label htmlFor="address">Address<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Address] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Address]}</p>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="price" 
                                    placeholder="Price"
                                    name="price"
                                    onChange={onChange}
                                    value={values[FormKyes.Price]}
                                    />
                                    <label htmlFor="price">Price<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Price] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Price]}</p>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="amenities" 
                                    placeholder="Amenities"
                                    name="amenities"
                                    onChange={onChange}
                                    value={values[FormKyes.Amenities]}
                                    />
                                    <label htmlFor="amenities">Amenities</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input 
                                    type="number" 
                                    step="50"
                                    className="form-control" 
                                    id="dimension" 
                                    placeholder="Dimension"
                                    name="dimension"
                                    onChange={onChange}
                                    value={values[FormKyes.Dimension]}
                                    />
                                    <label htmlFor="dimension">Dimension<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Dimension] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Dimension]}</p>}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="beds" 
                                    placeholder="Beds"
                                    name="beds"
                                    onChange={onChange}
                                    value={values[FormKyes.Beds]}
                                    />
                                    <label htmlFor="beds">Beds<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Beds] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Beds]}</p>}
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="bath" 
                                    placeholder="Bath"
                                    name="bath"
                                    onChange={onChange}
                                    value={values[FormKyes.Bath]}
                                    />
                                    <label htmlFor="bath">Bath<span className="text-danger">*</span></label>
                                    {errors[FormKyes.Bath] && <p className="text-danger fs-6 fst-italic m-0">{errors[FormKyes.Bath]}</p>}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea 
                                    className="form-control"
                                    id="description" 
                                    placeholder="Description"
                                    name="description"
                                    onChange={onChange}
                                    value={values[FormKyes.Description]}
                                    >
                                    </textarea>
                                    <label htmlFor="description">Description</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPropertyModal;
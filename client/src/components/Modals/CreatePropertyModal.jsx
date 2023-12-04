// eslint-disable-next-line react/prop-types
import useForm from "../../hooks/useForm";
import style from "./ConfirmDeleteModal.module.css";
// import Multiselect from 'multiselect-react-dropdown';
import * as service from "../../services/propertiesService";

const SignInFormKyes = {
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
function CreatePropertyModal({onCreate, onClose}) {

    async function formSubmitHandler(data) {
        try {
            const result = await service.create(data);
            onCreate(result); //return new created property 
            onClose();
            
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(formSubmitHandler, {
        [SignInFormKyes.Title]: '',
        [SignInFormKyes.Price]: '',
        [SignInFormKyes.ImgUrl]: '',
        [SignInFormKyes.Address]: '',
        [SignInFormKyes.Dimension]: '',
        [SignInFormKyes.Beds]: '',
        [SignInFormKyes.Bath]: '',
        [SignInFormKyes.Tag]: '',
        [SignInFormKyes.Kind]: '',
        [SignInFormKyes.Amenities]: '',
        [SignInFormKyes.Description]: '',
    });

    return (
        <div className={style.myModal} tabIndex={-1} id="CreatePropertyModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add new property</h5>
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
                                    value={values[SignInFormKyes.Title]}
                                    />
                                    <label htmlFor="title">Title</label>
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
                                    value={values[SignInFormKyes.Tag]}
                                    >
                                        <option></option>
                                        <option value="For Sell">For Sell</option>
                                        <option value="For Rent">For Rent</option>
                                    </select>
                                    <label htmlFor="tag">Tag</label>
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
                                    value={values[SignInFormKyes.Kind]}
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
                                    <label htmlFor="kind">Kind</label>
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
                                    value={values[SignInFormKyes.ImgUrl]}
                                    />
                                    <label htmlFor="imgUrl">Image URL</label>
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
                                    value={values[SignInFormKyes.Address]}
                                    />
                                    <label htmlFor="address">Address</label>
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
                                    value={values[SignInFormKyes.Price]}
                                    />
                                    <label htmlFor="price">Price</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input 
                                    // options={this.state.options} // Options to display in the dropdown
                                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                    // onSelect={this.onSelect} // Function will trigger on select event
                                    // onRemove={this.onRemove} // Function will trigger on remove event
                                    // displayValue="name" // Property name to display in the dropdown options
                                    type="text" 
                                    className="form-control" 
                                    id="amenities" 
                                    placeholder="Amenities"
                                    name="amenities"
                                    onChange={onChange}
                                    value={values[SignInFormKyes.Amenities]}
                                    />
                                    <label htmlFor="amenities">Amenities</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input 
                                    type="number" 
                                    step="10"
                                    className="form-control" 
                                    id="dimension" 
                                    placeholder="Dimension"
                                    name="dimension"
                                    onChange={onChange}
                                    value={values[SignInFormKyes.Dimension]}
                                    />
                                    <label htmlFor="dimension">Dimension</label>
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
                                    value={values[SignInFormKyes.Beds]}
                                    />
                                    <label htmlFor="beds">Beds</label>
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
                                    value={values[SignInFormKyes.Bath]}
                                    />
                                    <label htmlFor="bath">Bath</label>
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
                                    value={values[SignInFormKyes.Description]}
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
                        Create
                    </button>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePropertyModal;
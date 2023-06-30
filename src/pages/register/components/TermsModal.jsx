
import { XLg } from "react-bootstrap-icons";
import { useState } from "react";
const TermsModal = (props) => {

    // eslint-disable-next-line react/prop-types
    const { isOpen, onClose, setAcceptTerm } = props;

    const [selectedValue, setSelectedValue] = useState('decline');

    const handleAccept = (e) => {
        e.preventDefault();
        if (selectedValue === 'accept') {
            setAcceptTerm(true);
        } else {
            setAcceptTerm(false);
        }
        onClose(false);

    }

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <div className="backdrop" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="terms-heading">
                    <h5>Terms and Conditions for Online Payment</h5>
                    <button onClick={() => { onClose(false) }}><XLg /></button>
                </div>
                <div className="terms-wrapper">
                    <div className="section">
                        <h5>General</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum possimus debitis sed fugit beatae voluptatem, quos necessitatibus accusamus ea dolore, dolores, dolorem numquam. Ea eos est dicta ratione corporis.</p>
                    </div>
                    <div className="section">
                        <h5>General</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum possimus debitis sed fugit beatae voluptatem, quos necessitatibus accusamus ea dolore, dolores, dolorem numquam. Ea eos est dicta ratione corporis.</p>
                    </div>
                    <div className="section">
                        <h5>General</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum possimus debitis sed fugit beatae voluptatem, quos necessitatibus accusamus ea dolore, dolores, dolorem numquam. Ea eos est dicta ratione corporis.</p>
                        <ol className="section-ol">
                            <li>lorem ipsum dolor sit amet, consectetur adip</li>
                            <li>lorem ipsum dolor sit amet, consectetur adip</li>
                            <li>lorem ipsum dolor sit amet, consectetur adip</li>
                            <li>lorem ipsum dolor sit amet, consectetur adip</li>
                        </ol>
                    </div>
                    <div className="section">
                        <h5>General</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum possimus debitis sed fugit beatae voluptatem, quos necessitatibus accusamus ea dolore, dolores, dolorem numquam. Ea eos est dicta ratione corporis.</p>
                    </div>
                </div>
                <div className="term-footer">
                    <div className="radio-group">
                        <div className="form-check">
                            <input onChange={handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="decline" checked={selectedValue === "decline"} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Decline
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={handleChange} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="accept" checked={selectedValue === "accept"} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Accept
                            </label>
                        </div>
                    </div>
                    <div className="action-btns">
                        <button className="next" onClick={handleAccept}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TermsModal
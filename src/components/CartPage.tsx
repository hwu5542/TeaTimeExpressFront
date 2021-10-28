import React, { useEffect } from "react";
import { AddressActionTypes, updateProfileAsync } from "../actions/UsersActions";
import { Addresses } from "../models/Addresses";
import { Users } from "../models/Users";
import { addAddressAction, selectUser, setAddressAction } from "../slices/UserSlice";
import { useAppDispatch, UseAppSelector } from "../store/hook";

const CartPage: React.FC = () => {
    const storeProfile:Users = JSON.parse(UseAppSelector(selectUser));

    let userProfile:Users = storeProfile;
    
    const dispatch = useAppDispatch();

    useEffect(
        () => {userProfile = storeProfile;}
    , [dispatch, storeProfile])

    const updateProfile = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        userProfile = storeProfile;

        dispatch(updateProfileAsync(userProfile));
    }

    let index = -1;

    const address = (addr:Addresses) => (
        (
            <div className="flex-shrink-0 p-3 bg-white">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={'#addr' + index + '-collapse'} aria-expanded="false">
                            <h5 className="mb-0" id="flashHover">{"Address Start With " + addr.addressLineOne}</h5>
                        </button>
                        <div className="collapse" id={'addr' + index + '-collapse'}>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" id={'AddressFirstLine_' + index.toString()} defaultValue={addr.addressLineOne} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.FIRST, index:e.target.id, payload:e.target.value}))}}/></div>
                            <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" id={'AddressSecondLine_' + index.toString()} defaultValue={addr.addressLineTwo} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.SECOND, index:e.target.id, payload:e.target.value}))}} /></div>
                            <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" id={'AddressPostcode_' + index.toString()} defaultValue={addr.addressPostcode} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.POSTCODE, index:e.target.id, payload:e.target.value}))}} /></div>
                            <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" id={'AddressCity_' + index.toString()} defaultValue={addr.addressCity} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.CITY, index:e.target.id, payload:e.target.value}))}} /></div>
                            <div className="col-md-12"><label className="labels">Apt / Suite</label><input type="text" className="form-control" id={'AddressAptSuite_' + index.toString()} defaultValue={addr.addressAptSuite} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.APTSUITE, index:e.target.id, payload:e.target.value}))}} /></div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" id={'AddressCountry_' + index.toString()} defaultValue={addr.addressCountry} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.COUNTY, index:e.target.id, payload:e.target.value}))}} /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" id={'AddressState_' + index.toString()} defaultValue={addr.addressState} onChange={e=>{dispatch(setAddressAction({type:AddressActionTypes.STATE, index:e.target.id, payload:e.target.value}))}} /></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <script>{index ++}</script>
            </div>
        )
    )

    const ListAddresses = () => (userProfile.userMailAddress.length > 1? userProfile.userMailAddress.map(address):<p>Add more mailling addresses here</p>)


    return (
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Product name</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$12</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">−$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </ul>

                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <button type="submit" className="btn btn-secondary">Redeem</button>
                    </div>
                </form>
            </div>

            <div className="col-md-5 col-lg-8 border-left">
                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6"><label className="labels">FirstName</label><input type="text" className="form-control" defaultValue={userProfile.userFirstName} onChange={e => { userProfile.userFirstName = e.target.value }} /></div>
                        <div className="col-md-6"><label className="labels">Lastname</label><input type="text" className="form-control" defaultValue={userProfile.userLastName} onChange={e => { userProfile.userLastName = e.target.value }} /></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" defaultValue={userProfile.userPhoneNumber} onChange={e => { userProfile.userPhoneNumber = e.target.value }} /></div>
                    </div>
                    {address(userProfile.userBillAddress)}
                </div>

                <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center experience"><span>Edit Shipping Address</span><span className="border px-3 p-1 add-experience" onClick={() => dispatch(addAddressAction())}><i className="fa fa-plus" ></i>&nbsp;Address</span></div><br />
                    {ListAddresses()}
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                </div>

                <hr className="my-4" />

                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={updateProfile}>Checkout</button></div>
            </div>

        </div>
    )
}

export default CartPage;
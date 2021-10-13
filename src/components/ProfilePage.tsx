import React, { useState } from "react"
import { updateProfileAsync } from "../actions/UsersActions"
import '../css/ProfilePage.css'
import { Addresses } from "../models/Addresses"
import { Users } from "../models/Users"
import { selectUsers } from "../slices/UserSlice"
import { useAppDispatch, UseAppSelector } from "../store/hook"

const ProfilePage: React.FC = () => {
    let userProfile:Users = JSON.parse(UseAppSelector(selectUsers).profile);
    
    const dispatch = useAppDispatch();

    const updateProfile = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        dispatch(updateProfileAsync(userProfile));
    }

    let index = -1;

    const address = (addr:Addresses) => (
        (
            <div className="flex-shrink-0 p-3 bg-white">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={'#addr' + index + '-collapse'} aria-expanded="false">
                            <h5 className="mb-0" id="flashHover">{"Address Start With" + addr.addressLineOne}</h5>
                        </button>
                        <div className="collapse" id={'addr' + index + '-collapse'}>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" defaultValue={addr.addressLineOne} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressLineOne=e.target.value} else {userProfile.userMailAddress[index].addressLineOne=e.target.value}}}/></div>
                            <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" defaultValue={addr.addressLineTwo} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressLineTwo=e.target.value} else {userProfile.userMailAddress[index].addressLineTwo=e.target.value}}} /></div>
                            <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" defaultValue={addr.addressPostcode} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressPostcode=e.target.value} else {userProfile.userMailAddress[index].addressPostcode=e.target.value}}} /></div>
                            <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" defaultValue={addr.addressCity} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressCity=e.target.value} else {userProfile.userMailAddress[index].addressCity=e.target.value}}} /></div>
                            <div className="col-md-12"><label className="labels">Apt / Suite</label><input type="text" className="form-control" defaultValue={addr.addressAptSuite} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressAptSuite=e.target.value} else {userProfile.userMailAddress[index].addressAptSuite=e.target.value}}} /></div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" defaultValue={addr.addressCountry} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressCountry=e.target.value} else {userProfile.userMailAddress[index].addressCountry=e.target.value}}} /></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" defaultValue={addr.addressState} onChange={e=>{if (index<0) {userProfile.userBillAddress.addressState=e.target.value} else {userProfile.userMailAddress[index].addressState=e.target.value}}} /></div>
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
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src={userProfile.userImage} /> 
                        <span><input type="text" className="font-weight-bold text-center form-control" defaultValue={userProfile.userUsername}/></span>
                        <br/>
                        <span><input type="text" className="text-black-50 text-center form-control" defaultValue={userProfile.userEmail || "Enter Your E-mail Here"} onChange={e=>{userProfile.userEmail=e.target.value}} /></span>
                        <span> </span>
                    </div>

                    <div className="d-sm-flex flex-column align-items-center text-center pt-3" id="deactivate">
                        <div> <b>Delete your account permanently</b> </div>
                        <div className="d-flex pt-3"> <button className="align-items-center btn danger">Deactivate</button> </div>
                    </div>
                    
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">FirstName</label><input type="text" className="form-control" defaultValue={userProfile.userFirstName} onChange={e=>{userProfile.userFirstName=e.target.value}}/></div>
                            <div className="col-md-6"><label className="labels">Lastname</label><input type="text" className="form-control" defaultValue={userProfile.userLastName} onChange={e=>{userProfile.userLastName=e.target.value}} /></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" defaultValue={userProfile.userPhoneNumber} onChange={e=>{userProfile.userPhoneNumber=e.target.value}} /></div>
                        </div>
                        {address(userProfile.userBillAddress)}
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={updateProfile}>Save Profile</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience"><span>Edit Shipping Address</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Address</span></div><br />
                        {ListAddresses()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
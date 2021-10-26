import React from "react"
import { useEffect } from "react"
import { listAccountsAsync } from "../actions/AdminActions"
import '../css/ProfilePage.css'
import { UserCredential } from "../models/UserCredential"
import { Users } from "../models/Users"
import { selectAccounts } from "../slices/AdminSlice"
import { selectUser } from "../slices/UserSlice"
import { useAppDispatch, UseAppSelector } from "../store/hook"

const AccountsPage: React.FC = () => {

    const accountsListStr: string[] = UseAppSelector(selectAccounts);

    const adminAccount: Users = JSON.parse(UseAppSelector(selectUser));

    let accountsList: Users[] = new Array(accountsListStr.length);

    let index = 0;

    for (let accountStr of accountsListStr) {
        accountsList[index++] = JSON.parse(accountStr);
    }

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(listAccountsAsync(new UserCredential(adminAccount.userUsername, adminAccount.userPassword)))
    }, [dispatch]);

    const AccountsTable = () => {
        console.log(accountsList);
        return (<div></div>)
    }

    // const AccountsTable = () => (accountsList.map((account) => (
    //     <tr className="table-active">
    //         <td>{account.userUsername}</td>
    //         <td>{account.userFirstName}</td>
    //         <td>{account.userLastName}</td>
    //         <td>{account.userEmail}</td>
    //         <td>{account.userMailAddress}</td>
    //         <td>{account.userPhoneNumber}</td>
    //         <td>Button</td>
    //     </tr>
    // )))

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Orders</th>
                </tr>
            </thead>
            <tbody>
                {AccountsTable()}
            </tbody>
        </table>
    )
}

export default AccountsPage;
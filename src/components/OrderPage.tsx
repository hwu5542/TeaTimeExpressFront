import React from "react";

const OrderPage: React.FC = () => {
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">className</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-active">
                    <th scope="row">Active</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <th scope="row">Default</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>


                <tr className="table-primary">
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-success">
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-danger">
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-warning">
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-info">
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-light">
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">Dark</th>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrderPage;
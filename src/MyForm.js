import * as React from "react";


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ''
            , lastName: ''
            , phoneNumber: ''
            , items: []
        };

        this.addFirstNameChange = this.addFirstNameChange.bind(this);
        this.addLastNameChange = this.addLastNameChange.bind(this);
        this.addPhoneNumberChange = this.addPhoneNumberChange.bind(this);
        this.addEntry = this.addEntry.bind(this);
    }

    addFirstNameChange(event) {
        const value = event.target.value;
        console.log("First name changed" + value);
        this.setState((prevState) => ({
            firstName: value
            , lastName: prevState.lastName
            , phoneNumber: prevState.phoneNumber
            , items: prevState.items
        }));
        console.log("New state after add first name" + Object.entries(this.state));
    }

    addLastNameChange(event) {
        const value = event.target.value;
        console.log("Last name changed" + value);
        this.setState((prevState) => (
            {
                firstName: prevState.firstName
                , lastName: value
                , phoneNumber: prevState.phoneNumber
                , items: prevState.items
            }
        ));
        console.log("New state after add last name" + Object.entries(this.state));
    }

    addPhoneNumberChange(event) {
        const value = event.target.value;
        console.log("Phone number changed" + value);
        this.setState((prevState) => (
            {
                firstName: prevState.firstName
                , lastName: prevState.lastName
                , phoneNumber: value
                , items: prevState.items
            }
        ));
        console.log("New state after add phone number" + Object.entries(this.state));
    }

    addEntry(event) {
        console.log("Add entry invoked, clearing state");

        this.setState((prevState) => (
            {
                firstName: ''
                , lastName: ''
                , phoneNumber: ''
                , items: prevState.items.concat(
                    [{
                        firstName: prevState.firstName
                        , lastName: prevState.lastName
                        , phoneNumber: prevState.phoneNumber
                    }]
                )
            }
        ));
    }

    render() {
        const elements = this.state.items.map((e) => (
            <li>{e.lastName}, {e.firstName} : {e.phoneNumber}</li>
        ));

        return <div id="outer-panel">
            <div id="input-table">
                <div>
                    <label id="firstNameLabel" htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName"
                           value={this.state.firstName}
                           onChange={this.addFirstNameChange}/>
                </div>
                <div>
                    <label id="lastNameLabel" htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName"
                           value={this.state.lastName}
                           onInput={this.addLastNameChange}/>
                </div>
                <label id="phoneNumberLabel" htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber"
                       value={this.state.phoneNumber}
                       onInput={this.addPhoneNumberChange}/>

                <div>
                    <button onClick={this.addEntry}>Click to Enter</button>
                </div>
            </div>
            <div id="entries">
                <ol>
                    {elements}
                </ol>
            </div>
        </div>
    }
}

export default MyForm
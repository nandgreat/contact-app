import React from 'react';

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are required");
        } else {

            this.props.addContactHandler(this.state);
            this.setState({ name: "", email: "" });
        }
    };

    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} placeholder="Name" />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder="Email" />
                    </div>
                    <button type='submit' className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.phone === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", phone: "" });
        console.log(this.state)
    };
    render() {
        return (
            <div className="row">
                <div class="col-lg-4">
                    <div className="ui main">
                        <form className="ui form" onSubmit={this.add}>
                            <div className="field">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
                            </div>
                            <div className="field">
                                <label>Phone number</label>
                                <input type="text" name="phone" placeholder="phone no" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })}></input>
                            </div>
                            <button className="ui button blue ">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddContact;
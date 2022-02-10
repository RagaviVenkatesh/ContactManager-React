import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "")
        {
            alert("All the fields are mandatory!");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "",email:""})
    }


    render() {
        return( 
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div class="field">
                        <label className="ui label">Name</label>
                        <input className="ui focus" type="text" name="name" placeholder="Name" value={this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}></input>
                    </div>
                    <div class="field">
                        <label className="ui label">Email</label>
                        <input className="ui focus" input type="email" name="email" placeholder="Email"
                        value={this.state.email} onChange={(e => this.setState({email:e.target.value}))}></input>
                    </div>
                    <button className="ui button red" button>Add</button>
                </form>
            </div>
        );
    };
}

export default AddContact;
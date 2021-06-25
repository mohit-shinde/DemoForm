import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            emailid: '',
            language:'C++',
            city:'Mumbai'
           // password: '',
            //bike: false,
           // car: false,
            //cycle: false,
            //areo:''
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeEmailHandler = (event) => {
        this.setState({
            emailid: event.target.value
        })
    }

    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    changeLangHandler = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    changecity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    changeVehicle = (event) => {
        this.setState({
            [event.target.name]:event.target.checked,
            areo:event.target.value
        })
        // console.log(event.target.value)
        // console.log(event.target.checked)
        // console.log(this.state.areo)
    }


    // clickHandler = (event) => {


    // }

    submitHandler = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.emailid} ${this.state.language} ${this.state.city}`)
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} onChange={this.changeUserNameHandler} />
                </div><br />
                <div>
                    <label htmlFor="emailid">Email-id</label>
                    <textarea type="text" value={this.state.emailid} onChange={this.changeEmailHandler} />
                </div><br />
                
                <div>
                    <label htmlFor="languages">Languages</label>
                    <select name="languagre" id="language" value={this.state.language} onChange={this.changeLangHandler}>
                        <option value="select" >Select Your Favourite Language</option>
                        <option value="python">Python</option>
                        <option value="c++">C++</option>
                        <option value="javascript">Javascript</option>
                        <option value="dart">Dart</option>
                        
                    </select>
                </div><br />
                <div>
                    <input type="radio" id="Mumbai" name="city" value="Mumbai" checked={this.state.city === "Mumbai"} onChange={this.changecity} />
                    <label htmlfor="Mumbai">Mumbai</label><br />
                    <input type="radio" id="Bangalore" name="city" value="Bangalore" checked={this.state.city === "Bangalore"} onChange={this.changecity} />
                    <label htmlfor="Bangalore">Bangalore</label><br />
                    
                </div><br />
                
                
                <button onClick={this.clickHandler}>Sumbit</button>
            </form>
        )
    }
}

export default Form

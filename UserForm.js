import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormEducationalDetails from './FormEducationalDetails';
import FormProfessionalDetails from './FormProfessionalDetails';
import FormSocialDetails from './FormSocialDetails';
import Sucess from './sucess';
import axios from 'axios';
export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        currentAddress: '',
        permanentAddress: '',
        image: '',
        Cource: '',
        College: '',
        Year: '',
        Percentage: '',
        Company: '',
        From: '',
        To: '',
        Desgination:'',
        Linkedln: '',
        Github: '',
        Facebook: '',
        Hobbies: '',
        }
    // next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
          first_Name: this.state.firstName,
          last_Name: this.state.lastName,
          Email: this.state.email,
          phoneNo: this.state.phoneNo,
          currentAddress: this.state.currentAddress,
          permanentAddress: this.state.permanentAddress,
          Image: this.state.image,
          Cource: this.state.Cource,
          College: this.state.College,
          Year: this.state.Year,
          Percentage : this.state.Percentage,
          Company : this.state.Company,
          From : this.state.From,
          To : this.state.To,
          Desgination : this.state.Desgination,
          Linkedln : this.state.Linkedln,
          Github : this.state.Github,
          Facebook : this.state.Facebook,
          Hobbies : this.state.Hobbies,
        };
        axios.post('http://localhost:4000/emp/add', obj)
            .then(res => console.log(res.data));
        
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            currentAddress: '',
            permanentAddress: '',
            image: '',
            Cource: '',
            College: '',
            Year: '',
            Percentage: '',
            Company: '',
            From: '',
            To: '',
            Desgination:'',
            Linkedln: '',
            Github: '',
            Facebook: '',
            Hobbies: '',
        })
      }

    
    
    render() {
        const { step } = this.state;
       const { firstName, lastName, email, phoneNo, currentAddress,
             permanentAddress, image, Cource, College, Year, Percentage,
              Company, From, To, Desgination, Linkedln, Github, Facebook, Hobbies } = this.state;
             const values = { firstName, lastName, email, phoneNo, currentAddress,
                permanentAddress, image, Cource, College, Year, Percentage,
                 Company, From, To, Desgination, Linkedln, Github, Facebook, Hobbies }
        
                switch(step) {
                    case 1:
                        return (
                            <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            
                            />
                        )
                    case 2:
                        return (
                            <FormEducationalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                    case 3:
                        return (
                            <FormProfessionalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                    case 4:
                        return (
                            <FormSocialDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        )
                        case 5:
                        return (
                            <Sucess
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            
                            values={values}
                            />
                        )
                    
                        
                }
    }
}

export default UserForm
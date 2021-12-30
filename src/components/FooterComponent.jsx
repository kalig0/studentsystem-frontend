import React, { Component } from 'react';

const getCurrentYear = () => {
        return new Date().getFullYear();
    }; 

class FooterComponent extends Component {

    

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <p className = "text-muted">Copyright ©{getCurrentYear()} </p>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
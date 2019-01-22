import React, { Component } from 'react';
import './Services.css'

class Services extends Component {
    render() {
        return(
            <div className= 'services'>
                <h3>Services</h3>
                <h2>What I Offer</h2>

                <div className= 'row'>
                    <div>
                        <span>
                        <i class="fas fa-desktop"></i>
                        </span>
                        <h4>Responsive</h4>
                        <p>Looks great on any screen size</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-object-group"></i>
                        </span>
                        <h4>Designed</h4>
                        <p>Custom design for your idea or business</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-globe-americas"></i>
                        </span>
                        <h4>World Wide</h4>
                        <p>Millions of users will view your site</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-question-circle"></i>
                        </span>
                        <h4>Questions</h4>
                        <p>Contact for consultations on your next idea</p>
                    </div>
                </div>

            </div>

        );
    }
  
};

export default Services;
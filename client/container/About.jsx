
import Component from '../core/Component';
import React from 'react';
import { Card, CardTitle, CardImg, CardText } from 'reactstrap';

import Icon from '../component/Icon';

export default class About extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div 
          className="row"
          style={{
            justifyContent: 'center'
          }}
        >
          <div className="col-md-6 col-lg-4 col-xs-4">
            <div>
              <img className="img-fluid" src="/img/largelogo.svg" />
            </div>
          </div>
        </div>
        <div 
          className="row"
          style={{
            justifyContent: 'center'
          }}
        >
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="aboutImageText"
                    src="/img/staff/member3.png"
                  />
                </div>

                <div className="aboutMemberText">
                  Costin,<br />
                  Co-founder, DevOps
                </div>
              </div>  
            </Card>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="aboutImageText"
                    src="/img/staff/member1.png"
                  />
                </div>

                <div className="aboutMemberText">
                  Daniel,<br />
                  Co-founder, support
                  <div>
                    <a href="https://www.linkedin.com/in/daniil-tikhomirov-797744180/" target="_blank">
                      <Icon name="linkedin" className="fab footer__social-media-icon" style={{width: '0.5em'}}/>
                    </a>
                  </div> 
                </div>
              </div>  
            </Card>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="aboutImageText"
                    src="/img/staff/member2.png"
                  />
                </div>

                <div className="aboutMemberText">
                  Ann,<br />
                  Operation manager, moderator
                </div>
              </div>  
            </Card>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="aboutImageText"
                    src="/img/staff/member4.png"
                  />
                </div>

                <div className="aboutMemberText">
                  Vlad,<br />
                  Marketing & PR
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="aboutImageText"
                    src="/img/staff/member5.jpg"
                  />
                </div>

                <div className="aboutMemberText">
                  Dave,<br />
                  Application Integration Specialist (USA Division)
                  <div>
                    <a href="https://www.linkedin.com/in/dave-kozikowski" target="_blank">
                      <Icon name="linkedin" className="fab footer__social-media-icon" style={{width: '0.5em'}}/>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Card body className="cardFix">
              <div className="aboutSubContainer">
                <div>
                  <img 
                    className="img-fluid aboutImageTextHidden"
                    src="/img/staff/member6.jpg"
                  />
                </div>

                <div className="aboutMemberText">
                  This can be you!<br />
                  Contact us, if you want to suggest your help!
                </div>
              </div>  
            </Card>
          </div>
        </div>
      </div>
    );
  };
}

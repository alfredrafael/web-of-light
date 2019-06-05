import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {Card} from 'react-bootstrap';


class Organizations extends React.Component {
	constructor(props) {
    super(props);
        this.state = {
        
            organizations: [
                {
                    name: 'Heterodox Academy',
                    website: 'www.website.com'
                },
                {
                    name: 'Prager University',
                    website: 'www.website.com'
                },
                {
                    name: 'ACLU',
                    website: 'www.website.com'
                },
                {
                    name: 'American Enterprise Institute',
                    website: 'www.website.com'
                },
                {
                    name: 'Brookings Institute',
                    website: 'www.website.com'
                },
                {
                    name: 'Heterodox Academy',
                    website: 'www.website.com'
                }
            ]
        }
    }

    render() {

        const organizationsMap = this.state.organizations.map((organization) => {
            return (
                <React.Fragment>
                <Container>
    

<Card style={{ width: '100%'}}>
  <Row>
  <Col md='6'>
    <h2>{organization.name}</h2>
    <p>The Modern Business template by Start Bootstrap includes:</p>
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis
      doloremque non cum id reprehenderit, quisquam totam aspernatur tempora
      minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.
    </p>
    </Col>
  <Col md='6'>
    <img className="img-fluid rounded" src="http://placehold.it/500x250" alt="" />
  </Col>
  </Row>
</Card>
</Container>
</React.Fragment>

            )
        });
        return (
            <div>
            {organizationsMap}
           </div>
        );
   }
}
export default Organizations;
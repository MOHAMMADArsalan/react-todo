import React from "react";
import { Button, Grid, Row, Col,FormControl,Form } from 'react-bootstrap';
class AddTodo extends React.Component {
    render() {
        return (
            <div className="marginTop20px"> 
                <Grid>
                    <Row className="show-grid">
                    <Col xs={2} md={2}></Col>
                        <Col xs={2} md={8}>
                             <Form inline>
                                <FormControl className="width"
                                    type="text"
                                   ref="input"
                                   />
                                <Button bsStyle="primary" onClick={this.props.addTodo} type="button">Add</Button>
                             </Form>
                        </Col>
                         <Col xs={2} md={2}></Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}


export default AddTodo;
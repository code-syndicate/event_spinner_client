import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { Form as SemanticForm, Button, Header, Image,  Icon } from 'semantic-ui-react';
import * as Yup from 'yup';


// Submit handler for the form 
function handleSubmitEvent(values) {
    alert(JSON.stringify(values));
}

// Sign In Form Component 
export default function SignInForm(props) {
    return (
        <div className='signInForm'>
            <Formik initialValues={{
                email: '',
                password: '',
            }}

                onSubmit={handleSubmitEvent}
                validationSchema={
                    Yup.object(
                        {
                            email: Yup.string("That's not a correct email").min(8, 'Your email seems too short').max(255, 'Your email seems too long'),
                            password: Yup.string().min(8, 'Your password seems short').max(25, 'Your password seems too long')
                        }
                    )

                } >

                <Form >

                    <Header as='h2' icon textAlign='center'>
                        <Icon name='user' circular />
                        <Header.Content > Sign In </Header.Content>
                    </Header>

                    

                    <div className='ui icon input  fluid blue'>
                        <i aria-hidden="true" class="mail circular inverted link icon"></i>
                        <Field className='' name='email' type='email' />
                        <ErrorMessage name='email' />
                    </div>


                    <br />
                    <br />

                    <div className='ui icon input fluid blue '>
                        <i aria-hidden="true" class="lock circular inverted link icon"></i>
                        <Field className='' name='password' type='password' />
                        <ErrorMessage name='password' />
                    </div>

                    <br />
                    <br />

                    <Button size='big' textAlign='center' > Sign In </Button>
                    
                </Form>


            </Formik>

        </div>
    )
}
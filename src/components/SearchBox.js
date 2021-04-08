import React from 'react';
import { Input, Icon  } from 'semantic-ui-react';
import { Formik, Form , Field,  } from 'formik';
import * as Yup from 'yup';

// submit handler for search box 
function handleSubmitEvent( values ){
    alert( JSON.stringify(values));
}

// SearchBox Component  
export default function SearchBox(props) {
    return (
        <div  style = {{display : 'inline-block', marginRight : '100px'}} className='SearchBox'>
            <Formik 
                initialValues  = {{searchText : ''}}
                onSubmit = {handleSubmitEvent}
                validationSchema = {
                    Yup.object(
                        { 
                            searchText : Yup.string().max(25).min(1),
                        }
                    )
                }
                >
                <Form className = 'ui icon input blue'>
                    {/* <Input as = {Field} name ='searchText'  type = 'text'  size = 'small' icon={<Icon  onClick = {{}} color = 'blue' name='search' inverted circular link />} placeholder='Search events...' /> */}
                    <Field name = 'searchText'  placeholder = 'Search events...' type = 'text' />
                    <i aria-hidden="true" class="search circular blue inverted link icon"></i>
                </Form>
            </Formik>
        </div>
    )
}
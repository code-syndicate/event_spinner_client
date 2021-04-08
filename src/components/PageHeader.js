import React from 'react';
import { Segment, Header as SemanticHeader, } from 'semantic-ui-react';
import SearchBox from './SearchBox';

// The Top  Header for the Site 
export default function PageHeader(props) {

    return (
        <div className='Header'>

            <Segment clearing  >
                <SemanticHeader color='blue' floated = 'left' textAlign = 'left' size='large' as='h2'  content='Event Spinner' icon='plug' />
                <SemanticHeader size='medium' style={{fontWeight : 'bolder'}} textAlign = 'right' floated = 'right' color='grey' >  Handling Events of the 21st Century   </SemanticHeader>
            

                <SemanticHeader textAlign = 'center'  floated = 'right'> <SearchBox /> </SemanticHeader>

            </Segment>
                

        </div>
    )
}
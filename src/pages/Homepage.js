import React from 'react';
import PageHeader from '../components/PageHeader';
import { Grid, Image } from 'semantic-ui-react';
import SignInForm from '../components/SignInForm';

// Homepage Component, Page - 
export default function Homepage(props) {


    return (
        <div className='Homepage'>
            <PageHeader />

            <Grid centered celled>
                <Grid.Row centered>
                    <Grid.Column  width={5}>
                        {/* <Image src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
                        <SignInForm/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );



}
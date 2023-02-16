import {storiesOf} from "@storybook/react";
import Grid from "../v2/Grid";
import {Image} from "../index";

const Columns = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column width={8}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={8}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

const Rows = () => (
    <Grid columns={3}>
        <Grid.Row>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)



storiesOf('v2 Grid',module)
    .add('Columns', Columns)
    .add('Rows', Rows)
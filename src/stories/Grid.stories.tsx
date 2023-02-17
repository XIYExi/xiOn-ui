import {storiesOf} from "@storybook/react";
import Grid from "../v2/Grid";
import {Image} from "../index";
import '../v2/Grid/_style.scss';

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
);

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
);


const Celled = () => (
    <Grid celled>
        <Grid.Row>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={13}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={10}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const GridExampleCelledInternally = () => (
    <Grid celled='internally'>
        <Grid.Row>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={10}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={10}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column width={3}>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const GridExampleDividedNumber = () => (
    <Grid columns={3} divided>
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
);

const GridExampleDividedPhrase = () => (
    <Grid columns='three' divided>
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
);


const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
            <Grid.Column>
                <Image src='./assets/lole.png'  alt={''}/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
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
);

const columns = new Array(16).fill(0).map((_, i) => (
    <Grid.Column key={i}>
        <Image src='./assets/lole.png'  alt={''}/>
    </Grid.Column>
))

const GridExampleGrid = () => <Grid>{columns}</Grid>

storiesOf('v2 Grid',module)
    .add('Columns', Columns)
    .add('Rows', Rows)
    .add('Celled', Celled)
    .add('Internally', GridExampleCelledInternally)
    .add('Divided', GridExampleDividedNumber)
    .add('Divided Phrase', GridExampleDividedPhrase)
    .add('Vertically', GridExampleVerticallyDivided)
    .add('Grid', GridExampleGrid)



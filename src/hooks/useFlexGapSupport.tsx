import * as React from 'react';
import { detectFlexGapSupported } from '../components/utils/styleChecker';

export default () => {
    const [flexible, setFlexible] = React.useState(false);
    React.useEffect(() => {
        setFlexible(detectFlexGapSupported());
    }, []);

    return flexible;
};

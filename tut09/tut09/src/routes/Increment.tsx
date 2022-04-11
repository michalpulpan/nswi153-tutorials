import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import {useContext} from 'react';
import CountContext from '../context/Counter';

const Increment = () => {
    const { count, incrementCount } = useContext(CountContext);

    return (
        <Layout>
            <h1>Incement</h1>
            <Button variant="outlined" onClick={()=>incrementCount()}>{count}</Button>
        </Layout>
    );
}

export default Increment;

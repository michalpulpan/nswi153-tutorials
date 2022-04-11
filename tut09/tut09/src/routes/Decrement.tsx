import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import {useContext} from 'react';
import CountContext from '../context/Counter';

const Decrement = () => {
    const { count, decrementCount } = useContext(CountContext);

    return (
        <Layout>
            <h1>Decrement</h1>
            <Button variant="outlined" onClick={()=>decrementCount()}>{count}</Button>
        </Layout>
    );
}

export default Decrement;

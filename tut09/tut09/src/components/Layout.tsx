
import Header from "./Header"
import Container from '@mui/material/Container';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                    {children}
            </Container>
        </>
    )
}

export default Layout;
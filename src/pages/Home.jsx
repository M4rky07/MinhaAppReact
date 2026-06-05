import Main from '../components/Main';
import Top3Cards from '../components/Top3Cards';

function Home() {

    return (

        <div className="container" >

            <h1 className="text-center m-4" >
                Top 3 Escolas da Paraíba
            </h1>

            <Main/>

            <Top3Cards />

        </div>

    );
}

export default Home;
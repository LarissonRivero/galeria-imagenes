import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card"
import Headers from "./components/Headers"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Headers title='Galeria de Imagenes con React' />
      <Card carTitle1='Alpes Suizos' carText1='Zona que ocupa la mayor parte del territorio suizo, aproximadamente el 62,5 % del país, en sus zonas central y sudoriental.' carTitle2=' valle de Yosemite' carText2='Es un valle glaciar californiano que se caracteriza por las abundantes nevadas y por su gran belleza natural en flora y en fauna.' carTitle3='Acantilados de Moher' carText3='Se encuentran en la región de El Burren, zona famosa por sus castillos, cuevas y una rica historia celta, en el condado de Clare de la República de Irlanda'/>
      <Footer footer='Galeria de Imagenes sobre Naturaleza, Realizado por Larisson Rivero' />
    </div>
  );
}
export default App;

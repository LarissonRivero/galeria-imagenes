import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import paisaje from '../assets/img1.jpg';
import cielo from '../assets/img2.jpg';
import pasto from '../assets/img3.jpg';

const targeta = (props) => {
    return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div className="card h-100 rounded img-thumbnail">
                    <Card.Img src={paisaje}/>
                        <div class="card-body">
                            <h5 class="card-title fs-2">{props.carTitle1}</h5>
                            <p class="card-text">{props.carText1}</p>
                            <div class="btn d-md-flex justify-content-md-center">
                                <Button variant="danger btn-lg col-6">Visitar</Button>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded img-thumbnail">
                    <Card.Img src={cielo}/>
                        <div class="card-body">
                            <h5 class="card-title fs-2">{props.carTitle2}</h5>
                            <p class="card-text">{props.carText2}</p>
                            <div class="btn d-md-flex justify-content-md-center">
                                <Button variant="danger btn-lg col-6">Visitar</Button>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 rounded img-thumbnail">
                    <Card.Img src={pasto}/>
                        <div class="card-body">
                            <h5 class="card-title fs-2">{props.carTitle3}</h5>
                            <p class="card-text">{props.carText3}</p>
                            <div class="btn d-md-flex justify-content-md-center">
                                <Button variant="danger btn-lg col-6">Visitar</Button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );   
};
  export default targeta;
  
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Detail() {
  const params = useParams();
  const { useEffect, useState } = require("react");
  const [detail, setDetail] = useState([]);
  useEffect(() => {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
            const masc = data.find((m) => m.id === Number(params.mascotaId));
            setDetail(masc);
        });
    });
 return (
   <div>
     <h1>{detail.nombre}</h1>
        <img src={detail.foto} alt={detail.descripcion} />
            <h3>{detail.raza}</h3>
   </div>
 );
}
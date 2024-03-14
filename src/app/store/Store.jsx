import Link from "next/link";
import "./Store.css";

const Store = () => {
  return (
    <div className="store">
      <h2>Esta es la ruta /store </h2>

      <p>¡Explora nuestras categorias!</p>
      <ul>
        <li>
          <Link href={"/store/prendasinferiores"}>Prendas Inferiores</Link>
        </li>
        <li>
          <Link href={"/store/prendassuperiores"}>Prendas superiores</Link>
        </li>
        <li>
          <Link href={"/store/accesorios"}>Accesorios</Link>
        </li>
        <li>
          <Link href={"/store/zapatos"}>Zapatos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Store;

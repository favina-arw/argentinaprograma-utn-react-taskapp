import {
  BsBookmarkCheck,
  BsCheck,
  BsGear,
  BsPencilSquare,
} from "react-icons/bs";

interface CategorySelectorProps {
  onSelectedCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelectedCategory,
}) => {
  const categorias = [
    { nombre: "PORHACER", nombreDisplay: "Por hacer", icono: <BsCheck /> },
    {
      nombre: "ENPRODUCCION",
      nombreDisplay: "En producción",
      icono: <BsGear />,
    },
    {
      nombre: "PORTESTEAR",
      nombreDisplay: "Por testear",
      icono: <BsPencilSquare />,
    },
    {
      nombre: "COMPLETADA",
      nombreDisplay: "Completada",
      icono: <BsBookmarkCheck />,
    },
  ];

  return (
    <section className="container mt-3" id="selector-categorias">
      <p className="fs-3">Seleccione una categoria</p>
      <div className="row gap-4">
        {categorias.map((categoria, index) => (
          <div className="col d-flex justify-content-center p-0" key={index}>
            <button
              onClick={() => onSelectedCategory(categoria.nombre)}
              className="border border-1 border-black d-flex gap-1 alignt-items-center rounded p-1 text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              {categoria.icono} {categoria.nombreDisplay}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySelector;

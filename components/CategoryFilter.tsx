interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = ["Playa", "Mansiones", "Tendencias", "Cabañas", "Diseño"];

const CategoryFilter = ({
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`whitespace-nowrap rounded-full border px-4 py-2 ${
            activeCategory === category
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
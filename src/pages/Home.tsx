import { categories } from "../data/data.json";

const Home = () => {
  return (
    <div>
      <ul className=" flex justify-center gap-4">
        {categories.map((category) => (
          <li className="font-roboto text-sm border border-accent p-1 rounded-sm bg-card text-text-white ">
            {category?.category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

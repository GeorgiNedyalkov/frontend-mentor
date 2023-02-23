import "./Articles.css";
import GamingGrowthImage from "../assets/images/image-gaming-growth.jpg";
import RetroImage from "../assets/images/image-retro-pcs.jpg";
import TopLaptopsImage from "../assets/images/image-top-laptops.jpg";

const Articles = ({ articles }) => {
  return (
    <ul className="articles">
      {articles.map(({ id, img, title, description }) => (
        <li key={id}>
          <Article
            id={id}
            image={img}
            title={title}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};

const Article = ({ id, image, title, description }) => {
  return (
    <article className="article">
      <img className="article__image" src={image} alt={description} />
      <div className="article__info">
        <p className="article__id">0{id}</p>
        <h4 className="article__title">{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};

export const newsArticles = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades",
    img: RetroImage,
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    img: TopLaptopsImage,
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
    img: GamingGrowthImage,
  },
];

export default Articles;

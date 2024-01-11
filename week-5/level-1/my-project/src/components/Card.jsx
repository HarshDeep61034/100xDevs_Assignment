const Card = ({ image, name, title, description, socials, intrests }) => {
  return (
    <div className="m-3 p-3 border-black border-2 rounded-lg w-72 flex flex-col items-center">
      <div>
        <img src={image} className="rounded-[50%] w-44" />
        <p className="my-2 font-semibold text-2xl">
          Hi, I'm <span className="text-blue-600">{name}</span>
        </p>
        <p className="text-center ">{title}</p>
      </div>
      <div>
        <p>{description}</p>
        <span className="text-xl font-bold">Hobbies: </span>
        <ul>
          {intrests.map((elem) => (
            <li key={elem} className="text-black font-semibold text-md">
              {elem}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-1">
        {socials.map((item, index) => (
          <a key={index} href={`https://${item.app}.com/${item.username}`}>
            <button className="py-1 px-3 bg-blue-600 rounded-xl text-white mx-1">
              {item.app}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;

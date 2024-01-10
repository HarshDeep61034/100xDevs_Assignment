const Card = ({ image, name, title, description, socials, intrests }) => {
  return (
    <div>
      <div>
        <img src={image} />
        <p>
          Hi, I'm <span>{name}</span>
        </p>
        <p>{title}</p>
      </div>
      {/* <div> */}
      {/*   <p>{description}</p> */}
      {/*   <ul> */}
      {/*     <p> */}
      {/*       {intrests.map((intrest) => { */}
      {/*         <li>{intrest}</li>; */}
      {/*       })} */}
      {/*     </p> */}
      {/*   </ul> */}
      {/*   <div> */}
      {/*     {socials.map((item) => { */}
      {/*       <a href={`https://${item.app}.com/${item.username}`}> */}
      {/*         {item.app} */}
      {/*         <button></button> */}
      {/*       </a>; */}
      {/*     })} */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

export default Card;

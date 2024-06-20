import './Characters.scss';

const Characters = (character) => {
    return (
        <section id="Characters" className={character.color}>
            <img src={character.image} alt={"Imagem de Fundo do " + character.name} className="bg-image"/>

            <div className={"info " + character.color}>
                <i></i>
                <h2 id="characterName" className={character.color}>{character.name}</h2>
                <p id="characterDescription">{character.description}</p>
            </div>
        </section>
    );
};

export default Characters;
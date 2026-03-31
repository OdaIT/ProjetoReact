const HeroCard = ({ name, superpower, isVillain }) => {
    return (
        <>
            <h2>{name}</h2>
            <p>Superpoder: {superpower}</p>
            <p>{isVillain ? 'Vilão' : 'Herói'}</p>
        </>
    )
}

export default HeroCard
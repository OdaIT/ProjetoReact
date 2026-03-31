const toLeetSpeak = (text) => {
  return text
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
    .replace(/s/gi, '5')
}

const LeetWelcome = () => {
    const userName = "Estudante Upskill"
    return (<>
        <h2>Modo Leet: {toLeetSpeak(userName)}</h2>
    </>)
}

export default LeetWelcome
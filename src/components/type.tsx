import Typewriter from "typewriter-effect";

function Type()
{
    return (
        <Typewriter
        options={{
            strings: [
               "Analyste développeur",
               "Développeur full stack",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
    />
    );
}

export default Type;
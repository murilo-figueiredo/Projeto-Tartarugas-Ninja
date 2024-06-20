import bgLeonardo from '../img/bg/bg-leonardo.jpg';
import bgDonatello from '../img/bg/bg-donatello.jpg';
import bgRaphael from '../img/bg/bg-raphael.jpg';
import bgMichelangelo from '../img/bg/bg-michelangelo.jpg';
import bgSplinter from '../img/bg/bg-splinter.png';

const Leonardo = {
    name: 'Leonardo',
    description: `Leonardo, o líder das Tartarugas Ninja, é um guerreiro destemido e estrategista brilhante, 
        reconhecido por sua habilidade incomparável com a espada katana. Com sua postura estoica e máscara azul 
        distintiva, ele personifica a calma na batalha e a determinação incansável em defender Nova York. Sua 
        liderança é mais do que um título, é um farol que mantém sua equipe unida e focada. Ágil e preciso, ele 
        enfrenta qualquer desafio com coragem e honra, protegendo os inocentes e lutando contra as forças do mal 
        com uma determinação inabalável.`,
    image: bgLeonardo,
    color: 'leo'
};

const Donatello = {
    name: 'Donatello',
    description: `Donatello, o gênio das Tartarugas Ninja, é reconhecido por sua mente brilhante e sua paixão 
        pela tecnologia. Com sua máscara roxa distintiva e seu intelecto afiado, ele é um mestre da inovação e 
        improvisação, utilizando suas habilidades em engenharia para criar armas e dispositivos incríveis. Na 
        batalha, Donatello prefere usar seu bastão "bo" como uma extensão de sua mente, combinando habilidades de 
        combate hábeis com estratégias astutas para superar os inimigos com eficiência e precisão, enquanto permanece 
        sempre um passo à frente em suas investidas.`,
    image: bgDonatello,
    color: 'donnie'
};

const Raphael = {
    name: 'Raphael',
    description: `Raphael, o rebelde das Tartarugas Ninja, é conhecido por sua natureza intensa e seu temperamento 
        explosivo. Com sua máscara vermelha característica e seu comportamento agressivo, ele é um combatente feroz 
        que prefere o combate corpo a corpo, utilizando suas habilidades excepcionais em artes marciais e seu par de 
        sais para desferir golpes rápidos e poderosos contra seus oponentes. Implacável e determinado, Raphael enfrenta 
        cada desafio de frente, defendendo sua família e sua cidade com uma ferocidade inabalável.`,
    image: bgRaphael,
    color: 'rapha'
};

const Michelangelo = {
    name: 'Michelangelo',
    description: `Michelangelo, o brincalhão das Tartarugas Ninja, é conhecido por seu senso de humor contagiante e 
        sua habilidade excepcional em artes marciais. Com sua máscara laranja distintiva e sua personalidade otimista, 
        ele traz leveza para o grupo enquanto enfrenta os desafios com uma mistura única de agilidade e destreza. 
        Michelangelo prefere o estilo de luta acrobático, usando seus nunchakus para desferir golpes rápidos e 
        imprevisíveis, sempre pronto para defender seus irmãos e combater a criminalidade em Nova York.`,
    image: bgMichelangelo,
    color: 'mikey'
};

const Splinter = {
    name: 'Mestre Splinter',
    description: `Splinter, o sábio mestre e pai das Tartarugas Ninja, é um rato especialista em artes marciais e um 
        mentor dedicado a seus filhos adotivos. Com sua figura imponente e sua sabedoria incomparável, ele personifica 
        a tranquilidade e a compaixão, guiando suas tartarugas com ensinamentos profundos e conselhos sábios. Splinter 
        é um mestre do ninjutsu, utilizando seus movimentos graciosos e sua técnica refinada para derrotar seus inimigos 
        com uma precisão impressionante, sempre priorizando a proteção de sua família e a manutenção da paz em Nova 
        York.`,
    image: bgSplinter,
    color: 'splinter'
};

const characters = [Leonardo, Donatello, Raphael, Michelangelo, Splinter];

export default characters;
import React from 'react'
import './About.css';
import kalkulator from './kalkulator.jpg'
import kalkulator2 from './kalkulator2.jpg'

const About = () => {



    return (
        <div className="About">
       <h1>History about calculator</h1>
       <p className="prviPasus">
       The first known tools used to aid arithmetic calculations were: bones (used to tally items), pebbles, and counting boards, and the abacus, known to have been used by Sumerians and Egyptians before 2000 BC.[6] Except for the Antikythera mechanism (an "out of the time" astronomical device), development of computing tools arrived near the start of the 17th century: the geometric-military compass (by Galileo), logarithms and Napier bones (by Napier), and the slide rule (by Edmund Gunter).


17th century mechanical calculators
In 1642, the Renaissance saw the invention of the mechanical calculator (by Wilhelm Schickard[7] and several decades later Blaise Pascal[8]), a device that was at times somewhat over-promoted as being able to perform all four arithmetic operations with minimal human intervention.[9] Pascal's calculator could add and subtract two numbers directly and thus, if the tedium could be borne, multiply and divide by repetition. Schickard's machine, constructed several decades earlier, used a clever set of mechanised multiplication tables to ease the process of multiplication and division with the adding machine as a means of completing this operation. (Because they were different inventions with different aims a debate about whether Pascal or Schickard should be credited as the "inventor" of the adding machine (or calculating machine) is probably pointless.)[10] Schickard and Pascal were followed by Gottfried Leibniz who spent forty years designing a four-operation mechanical calculator, the stepped reckoner, inventing in the process his leibniz wheel, but who couldn't design a fully operational machine.[11] There were also five unsuccessful attempts to design a calculating clock in the 17th century.[12]
       </p>
       
       <p className="prviPasus">
       The 18th century saw the arrival of some notable improvements, first by Poleni with the first fully functional calculating clock and four-operation machine, but these machines were almost always one of a kind. Luigi Torchi invented the first direct multiplication machine in 1834: this was also the second key-driven machine in the world, following that of James White (1822).[13] It was not until the 19th century and the Industrial Revolution that real developments began to occur. Although machines capable of performing all four arithmetic functions existed prior to the 19th century, the refinement of manufacturing and fabrication processes during the eve of the industrial revolution made large scale production of more compact and modern units possible. The Arithmometer, invented in 1820 as a four-operation mechanical calculator, was released to production in 1851 as an adding machine and became the first commercially successful unit; forty years later, by 1890, about 2,500 arithmometers had been sold[14] plus a few hundreds more from two arithmometer clone makers (Burkhardt, Germany, 1878 and Layton, UK, 1883) and Felt and Tarrant, the only other competitor in true commercial production, had sold 100 comptometers.[15]
       It wasn't until 1902 that the familiar push-button user interface was developed, with the introduction of the Dalton Adding Machine, developed by James L. Dalton in the United States.
       <img src={kalkulator2} className="oldCalculator2"></img>


       </p>
        </div>
    )
}

export default About

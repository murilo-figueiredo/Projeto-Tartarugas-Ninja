import './Options.scss';

import iconLeonardo from '../img/icons/icon-leonardo.png';
import iconDonatello from '../img/icons/icon-donatello.png';
import iconRaphael from '../img/icons/icon-raphael.png';
import iconMichelangelo from '../img/icons/icon-michelangelo.png';
import iconSplinter from '../img/icons/icon-splinter.png';

const Options = (props) => {
    const optionButtons = document.querySelectorAll('input');
    let preSelectedButton = document.querySelector('.selected');
    let selectedButton;

    function constrastButton(element)
    {
        selectedButton = element.parentNode;

        if(selectedButton !== preSelectedButton)
        {
            preSelectedButton.classList.remove('selected');
            selectedButton.classList.add('selected');

            preSelectedButton = selectedButton;
        }
    }

    optionButtons.forEach(radioButton => {
        radioButton.addEventListener('click', (event) => {
            constrastButton(event.target.parentNode);
        });
    });

    return (
        <aside id="Options">
            <ul className="list-options">
                <label htmlFor="0-option" className="button-option leo selected"><li>
                    <img src={iconLeonardo} alt="Ícone do Leonardo"/>
                    <input type="radio" name="group-options" id="0-option" onClick={() => props.updateCharacter(0)} defaultChecked/>
                </li></label>

                <label htmlFor="1-option" className="button-option donnie"><li>
                    <img src={iconDonatello} alt="Ícone do Donatello"/>
                    <input type="radio" name="group-options" id="1-option" onClick={() => props.updateCharacter(1)}/>
                </li></label>

                <label htmlFor="2-option" className="button-option rapha"><li>
                    <img src={iconRaphael} alt="Ícone do Raphael"/>
                    <input type="radio" name="group-options" id="2-option" onClick={() => props.updateCharacter(2)}/>
                </li></label>

                <label htmlFor="3-option" className="button-option mikey"><li>
                    <img src={iconMichelangelo} alt="Ícone do Michelangelo"/>
                    <input type="radio" name="group-options" id="3-option" onClick={() => props.updateCharacter(3)}/>
                </li></label>

                <label htmlFor="4-option" className="button-option splinter"><li>
                    <img src={iconSplinter} alt="Ícone do Mestre Splinter"/>
                    <input type="radio" name="group-options" id="4-option" onClick={() => props.updateCharacter(4)}/>
                </li></label>
            </ul>
        </aside>
    );
};

export default Options;
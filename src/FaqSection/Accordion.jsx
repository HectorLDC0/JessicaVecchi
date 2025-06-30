import { Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./Accordion.css";

const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const accordionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setActiveAccordion(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    };

    return (
        <div className="accordion-container" ref={accordionRef}>
            <div className="accordion-item">
                <input
                    type="radio"
                    name="accordion"
                    id="acc1"
                    className="accordion-toggle"
                    checked={activeAccordion === 'acc1'}
                    onChange={() => { }} // Controlled by handleAccordionClick
                />
                <label
                    htmlFor="acc1"
                    className="accordion-label"
                    onClick={() => handleAccordionClick('acc1')}
                >
                    As sessões são somente online?
                    <div className="accordion-icon-wrapper">
                        <Plus className="accordion-icon accordion-icon-plus" size={34} strokeWidth={1} />
                        <Minus className="accordion-icon accordion-icon-minus" size={34} strokeWidth={1} />
                    </div>
                </label>
                <div className="accordion-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laborum veritatis explicabo at. Reprehenderit in quibusdam voluptatibus assumenda inventore, quae vero natus ipsam! Beatae, omnis? Iure quaerat doloribus placeat totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit quaerat excepturi dolore consectetur fuga, nam est veniam cumque laboriosam recusandae corporis aut. Dolorem expedita non accusantium, eum quibusdam in?</p>
                </div>
            </div>

            <div className="accordion-item">
                <input
                    type="radio"
                    name="accordion"
                    id="acc2"
                    className="accordion-toggle"
                    checked={activeAccordion === 'acc2'}
                    onChange={() => { }} // Controlled by handleAccordionClick
                />
                <label
                    htmlFor="acc2"
                    className="accordion-label"
                    onClick={() => handleAccordionClick('acc2')}
                >
                    Qual a duração das sessões?
                    <div className="accordion-icon-wrapper">
                        <Plus className="accordion-icon accordion-icon-plus" size={34} strokeWidth={1} />
                        <Minus className="accordion-icon accordion-icon-minus" size={34} strokeWidth={1} />
                    </div>
                </label>
                <div className="accordion-content">
                    <p>Conteúdo da seção</p>
                </div>
            </div>

            <div className="accordion-item">
                <input
                    type="radio"
                    name="accordion"
                    id="acc3"
                    className="accordion-toggle"
                    checked={activeAccordion === 'acc3'}
                    onChange={() => { }} // Controlled by handleAccordionClick
                />
                <label
                    htmlFor="acc3"
                    className="accordion-label"
                    onClick={() => handleAccordionClick('acc3')}
                >
                    Atende crianças, casais e grupos?
                    <div className="accordion-icon-wrapper">
                        <Plus className="accordion-icon accordion-icon-plus" size={34} strokeWidth={1} />
                        <Minus className="accordion-icon accordion-icon-minus" size={34} strokeWidth={1} />
                    </div>
                </label>
                <div className="accordion-content">
                    <p>Conteúdo da seção.</p>
                </div>
            </div>

            <div className="accordion-item">
                <input
                    type="radio"
                    name="accordion"
                    id="acc4"
                    className="accordion-toggle"
                    checked={activeAccordion === 'acc4'}
                    onChange={() => { }} // Controlled by handleAccordionClick
                />
                <label
                    htmlFor="acc4"
                    className="accordion-label"
                    onClick={() => handleAccordionClick('acc4')}
                >
                    Minha localização afeta o atendimento?
                    <div className="accordion-icon-wrapper">
                        <Plus className="accordion-icon accordion-icon-plus" size={34} strokeWidth={1} />
                        <Minus className="accordion-icon accordion-icon-minus" size={34} strokeWidth={1} />
                    </div>
                </label>
                <div className="accordion-content">
                    <p>Conteúdo da seção</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
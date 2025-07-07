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
        <>
        <p className="title">Perguntas frequentes</p>
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
                        <p>Atualmente, os atendimentos são realizados exclusivamente de forma online. Esse formato permite mais flexibilidade e conforto, além de facilitar o acesso ao cuidado terapêutico, onde quer que você esteja</p>
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
                        <p>Cada encontro dura cerca de 50 minutos. Esse tempo é ideal para que possamos aprofundar os temas que surgirem e encerrar a sessão com tranquilidade.</p>
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
                        <p>Não. No momento, meu trabalho é voltado exclusivamente para o atendimento de adultos, em sessões individuais.</p>
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
                        <p>De jeito nenhum! Atendo brasileiros em qualquer lugar do mundo, seja você um recém-chegado tentando se adaptar, alguém que já mora fora há anos, ou quem está se preparando para imigrar. A terapia online rompe fronteiras!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
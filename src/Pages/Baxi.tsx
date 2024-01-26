import React from 'react'
import Showcase from '../CElements/CShowcase/Showcase';
import { extra_icon_img, icon_elector, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img, icon_clean, } from '../Assets/Images';
import ContourService from '../CElements/ContourService/ContourService';
import Company from '../CElements/Company/Company';

const DATA = [
    { id: 1, text: 'Настенные газовые котлы', icon: icon_elector },
    { id: 2, text: 'Настенные конденсационные котлы', icon: icon_boiler },
    { id: 3, text: 'Напольные атмосферные котлы', icon: icon_setting },
    { id: 4, text: 'Напольные конденсационные', icon: icon_boiler_repair },
    { id: 5, text: 'Бойлеры к котлам', icon: icon_wall_repair },
];

const TEXT_LIST = [
  'Итальянская компания BAXI S.p.A. занимается производством оборудования для отопления и горячего водоснабжения уже более 50 лет. Ассортимент выпускаемой продукции включает настенные стандартные и конденсационные газовые отопительные котлы, напольные газовые котлы с чугунным теплообменником и электрические накопительные водонагреватели.',
  'Общий годовой оборот компании составляет около 270 миллионов евро. В компании занято 800 сотрудников. Более 75% выпускаемой продукции поставляется на экспорт в 70 стран по всему миру.',
  'Компания BAXI S.p.A. была основана в 1924 году австрийской семьей Westen, которая открыла в городе Bassano Del Grappa фабрику по производству эмалированной посуды.','В период с 1978 по 1984 год компания входила в группу Zanussi и занималась производством газовых котлов, электрических водонагревателей, стальных радиаторов и стальных ванн.','C 1984 по 1998 года компания называлась Ocean Idroclima и входила в группу компаний El.Fi. С середины 80-х годов начинается активное развитие экспорта производимой продукции в мировом масштабе.','В феврале 1999 года компания получает новое имя — BAXI S.p.A. и входит в состав холдинга BAXI GROUP, а начиная с 2009 года — в группу BDR Thermea.', 'Сегодня внутри холдинга BDR Thermea завод BAXI S.p.A. является центром по производству настенных газовых котлов. Общий объем выпускаемой продукции составляет около 500000 единиц газовых настенных котлов в год, включая такие популярные серии, как MAIN, LUNA, ECO, NUVOLA.','В 1993 году компания BAXI S.p.A. одной из первых в отопительном секторе получила международный сертификат системы качества производства ISO 9001.','В конце 2001 года завод BAXI S.p.A. был удостоен сертификата экологичности производства ISO 14001.', 'Вся продукция, выпускаемая на заводе BAXI S.p.A., отличается высоким качеством и надежностью. А благодаря квалифицированной сервисной и технической поддержке продукция под маркой BAXI завоевала заслуженное доверие покупателей во многих странах мира.'
]

const Baxi = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Baxi' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h1 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h1>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
            </section>
        </div>
    )
}

export default Baxi
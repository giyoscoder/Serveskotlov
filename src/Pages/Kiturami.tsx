import React from 'react'
import Showcase from '../CElements/CShowcase/Showcase';
import { icon_clean, icon_filter, icon_faulty, icon_ventilation, icon_elector, icon_setting, } from '../Assets/Images';
import ContourService from '../CElements/ContourService/ContourService';
import Company from '../CElements/Company/Company';
const DATA = [
    { id: 1, text: 'Чистка горелки котла', icon: icon_clean },
    { id: 3, text: 'Замена теплообменника', icon: icon_filter },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Замена вентилятора', icon: icon_ventilation },
    { id: 5, text: 'Замена циркуляционного насоса', icon: icon_faulty },
    { id: 6, text: 'Ремонт электро котла', icon: icon_elector },
];

const TEXT_LIST = ['Сервисный центр котлов Kiturami - это профессиональная организация, специализирующаяся на обслуживании и ремонте отопительных котлов ведущего производителя Kiturami. Наш центр обладает богатым опытом и высококвалифицированными специалистами, которые готовы предоставить качественную техническую поддержку для вашего котла.',
    'Мы позаботимся о всех ваших потребностях, связанных с обслуживанием и ремонтом, и гарантируем быстрое и эффективное решение любых проблем. Все наши специалисты проходят обязательное обучение и регулярно обновляют свои знания, чтобы быть в курсе последних технических инноваций и современных методов ремонта.', 'Мы стремимся предоставить нашим клиентам полное удовлетворение и комфорт, поэтому в нашем сервисном центре осуществляется не только качественный ремонт и обслуживание, но и предоставляются консультации по оптимальному использованию и эксплуатации котлов Kiturami', 'Мы гордимся нашим отличным сервисом и постоянно превосходим ожидания наших клиентов. Наша цель - обеспечить надежность, эффективность и долговечность работы вашего котла Kiturami.', 'Обратившись в наш сервисный центр, вы можете быть уверены, что ваш котел находится в надежных руках опытных профессионалов. Мы стремимся к тому, чтобы обеспечить безопасность и комфорт вашего дома, делая все возможное для того, чтобы ваша система отопления работала безупречно и наилучшим образом служила вам.', 'Выбирая сервисный центр котлов Kiturami, вы выбираете надежного партнера по обслуживанию вашего отопительного оборудования. Свяжитесь с нами сегодня, и мы поможем вам с любыми вопросами, связанными с вашим котлом Kiturami.']

const Kiturami = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Kiturami' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h1 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h1>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
            </section>
        </div>
    )
}

export default Kiturami
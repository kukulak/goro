import React from 'react'
import Title from '../GlobalElements/Title.component' 
import Testimonio from './Testimonio.component'
import { TestimonialWrapper, AllCardsWraper } from './Testimonio.styles'

const testimonios = [
    {
        id: 'timon001',
        nombre: 'Alberto',
        fecha: '050621',
        texto: 'Muchas gracias por todo quedó mejor de lo que esperabamos, ya se los dije; volveremos',
        // foto: 'http://gorogoroil.com/images/testimonios/img001.jpg',
    },
    {
        id: 'timon002',
        nombre: 'Rocio',
        fecha: '050622',
        texto: '¡Amigos Goro Goro! ¡Increible! facinado con el resultado, gracias por todo, mil recomendable',
        // foto: 'http://gorogoroil.com/images/testimonios/img001.jpg',
    },
    {
        id: 'timon003',
        nombre: 'Serch Razma',
        fecha: '050622',
        texto: 'Muchas gracias por todo quedó mejor de lo que esperabamos, ya se los dije; volveremos',
        // foto: 'http://gorogoroil.com/images/testimonios/img001.jpg',
    },
    {
        id: 'timon004',
        nombre: 'Valquimi',
        fecha: '050622',
        texto: 'Muchas gracias por todo quedó mejor de lo que esperabamos, ya se los dije; volveremos',
        // foto: 'http://gorogoroil.com/images/testimonios/img001.jpg',
    }
]


const Testimoniales = () => {
    return(
        <TestimonialWrapper className='testimoniales'>
            <Title title={'Testimoniales'} />
            <AllCardsWraper className='groupCards'>
            {testimonios.map(test => 
                <Testimonio key={test.id} texto={test.texto} img={test.foto} />
                )}
            </AllCardsWraper>
        </TestimonialWrapper>
    )
}

export default Testimoniales
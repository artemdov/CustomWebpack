import React, {useState, useEffect} from 'react'
import './slider.css'


const images = [
    <img key='first' src={'https://i.pinimg.com/236x/81/1d/a4/811da4e113ad9df6a8e4c75eb902ef5d--cheetahs-photos.jpg'} alt='first'/>,
    <img key='second' src={'https://i.pinimg.com/236x/e9/52/71/e952715f27acbf268241c81104b02ed9--cheetahs-lions.jpg'} alt='second'/>,
    <img key='third' src={'https://i.pinimg.com/236x/93/47/41/93474152495e4ac1b45062f2a16a8a85--la-nature-wildlife-nature.jpg'} alt='third'/>

]


export const Slider = () => {
    
    const [activeIndex, setActiveIndex] = useState(0)

    /*useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((currentActiveIndex) =>
                currentActiveIndex === images.length - 1 ? 0 : currentActiveIndex + 1
            )
        }, 3000)

        return () => clearInterval()
    }, [])*/

    const prevImg = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImg = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    const buttonPrev = () => {
        setActiveIndex(prevImg)
    }
    const buttonNext = () => {
        setActiveIndex(nextImg)
    }

    return (

        <div className='slider'>
            <button onClick={alert('hello')}>prev</button>
            <div
                className='slider-img prev-slider-img'
                key={prevImg}
            >
                {images[prevImg]}
            </div>
            <div
                className='slider-img'
                key={activeIndex}
            >
                {images[activeIndex]}
            </div>
            <div
                className='slider-img next-slider-img'
                key={nextImg}
            >
                {images[nextImg]}
            </div>
            <button onClick={buttonNext}>next</button>
        </div>
    )
}
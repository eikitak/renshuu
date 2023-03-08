'use strict';
{
    window.addEventListener('DOMContentLoaded', () => {
        // /////////////////////////////////////////////////////

        gsap.to('body', {
            opacity: 1,
            duration: .5,
            ease: 'power4.in'
        });



        // nav //
        document.getElementById('nav-btn').addEventListener('click', () => {
            document.querySelector('nav ul').classList.toggle('active');
        });


        // slide-fore //

        // gsap.to('.sfi img', {
        //     clipPath: 'inset(0% 0% 0% 0%)',
        //     duration: .5,
        //     stagger: 2,
        //     ease: 'none',
        //     repeat: -1,
        //     repeatDelay: 1
        // });

        gsap.to('.sfi2 img',
            {
                clipPath: 'inset(0%)',
                duration: 2,
                stagger: 2,
                ease: 'none',
                repeat: -1,
                repeatDelay: 0,
            });


        // slideArea //
        gsap.set('.slide', {
            xPercent: -100
        });

        gsap.to('.slide', {
            xPercent: 0,
            duration: 1.5,
            stagger: 3,
            delay: 1.5,
            ease: 'power4.inOut',
            repeat: -1,
            repeatDelay: 1.5,
        });

        gsap.to('.clip', {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            stagger: 3,
            delay: 1.5,
            ease: 'power4.inOut',
            repeat: -1,
            repeatDelay: 1.5,
        });

        gsap.to('.fade', {
            opacity: 1,
            duration: 1.5,
            stagger: 3,
            delay: 1.5,
            ease: 'power4.inOut',
            repeat: -1,
            repeatDelay: 1.5,
        });

        gsap.to('.fade2', {
            opacity: 1,
            duration: 1.5,
            stagger: 3,
            delay: 1.5,
            ease: 'power4.inOut',
            repeat: -1,
            repeatDelay: 1.5,
        });


        // bgColorChange //

        const bgColorChange = function () {
            gsap.to('body', {
                backgroundColor: '#f0f8ff',
                duration: .3,
                scrollTrigger: {
                    trigger: '.rotateArea',
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: 'play reverse play reverse',
                    // markers: 'true',
                }
            });
        }
        bgColorChange();


        // rotateArea //
        const rotateArea = function () {
            let img = document.querySelector('.rotateArea img');
            let img2 = document.querySelector('.rotateArea2 img');

            gsap.to(img, {
                rotate: 360,
                ease: 'none',
                scrollTrigger: {
                    scrub: 2
                },
            });

            gsap.to(img2, {
                rotate: 360,
                duration: 10,
                repeat: -1,
                ease: 'none',
                scrollTrigger: {
                    trigger: img2,
                    start: 'top 100%',
                    end: 'bottom 0%',
                    toggleActions: 'play pause play pause',
                    // markers: 'true'
                }
            });
        };
        rotateArea();


        // 無限スライド //
        const infiniteSlideArea = function () {
            let clone = document.querySelector(`.infinite-slides`).cloneNode(true);
            document.querySelector(`.infinite-slideArea`).appendChild(clone);

            const images = document.querySelectorAll('.infinite-slides');
            images.forEach(img => {
                gsap.to(img, {
                    xPercent: -100,
                    duration: 30,
                    repeat: -1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.infinite-slides img',
                        start: 'top 100%',
                        end: 'bottom 0%',
                        toggleActions: 'play pause play pause',
                        // markers: true,
                    }
                });
            });
        };
        infiniteSlideArea();


        gsap.timeline({
            yoyo: 'true',
            repeat: -1,
            repeatDelay: .5,
        })
        .to('.bone', {
            yPercent: -190,
            duration: 1,
        })
        .to('.btwo', {
            xPercent:90,
            duration: 1,
        },'<')
        .to('.bthree', {
            yPercent:90,
            duration: 1,
        },'<')
        .to('.bfore', {
            xPercent: -190,
            duration: 1,
        },'<')
        .to('.bc', {
            rotate: 360,
            duration: 1,
        },'<')
        .to('.bd', {
            rotate: -360,
            duration: 1,
        },'<')
        .to('.bbase', {
            scale: 1.7,
            duration: 1,
        },'<')
        .to('.bbase p', {
            scale: .7,
            duration: 1,
        },'<');



        // ////////////////////////////////////////////////////

    });
}
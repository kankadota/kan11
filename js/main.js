'use strict';
 
 const links = document.querySelectorAll('a[href^="#"]')
 
 links.forEach(link => { 
    link.addEventListener('click',e =>{
        
        e.preventDefault()

        const target = document.querySelector(link.hash)
        const offset = window.pageYOffset + target.getBoundingClientRect().top

        window.scrollTo({
            top: offset,
            behavior:'smooth'
        })


    })
 })


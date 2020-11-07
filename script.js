

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const progressBar = document.querySelector('.progress-bar')

const testimonials = [
    {
    name: 'Michael Barry',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
    text: "Adipisicing elit. Ducimus neque quos quas qui commodi rem, autem aperiam laborum et at hic ullam, dolores omnis tempore labore voluptatum itaque! Adipisci nisi nulla voluptatem sed totam molestiae ullam maiores eum, repellat quibusdam vel eveniet error officiis vitae consequuntur est accusamus aliquid minus sequi magni a sunt alias sint. Excepturi nobis cupiditate ullam?",
},
{
    name: 'Taylor Carey',
    position: 'Operations Manager',
    photo: 'https://randomuser.me/api/portraits/women/42.jpg',
    text: "Lorem ipsum dolor.Ducimus neque quos quas qui commodi rem, autem aperiam laborum et at hic ullam, dolores omnis tempore labore voluptatum itaque! Adipisci nisi nulla voluptatem sed totam molestiae ullam maiores eum, repellat quibusdam vel eveniet error officiis vitae consequuntur est accusamus aliquid minus sequi magni a sunt alias sint. Excepturi nobis cupiditate ullam?",
},
{
    name: 'Name 3',
    position: 'Restaurant Manager',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: "Ducimus neque quos quas qui commodi rem, autem aperiam laborum et at hic ullam, dolores omnis tempore labore voluptatum itaque! Adipisci nisi nulla voluptatem sed totam molestiae ullam maiores eum, repellat quibusdam vel eveniet error officiis vitae consequuntur est accusamus aliquid minus sequi magni a sunt alias sint. Excepturi nobis cupiditate ullam?",
}
]

let index = 0;

updateTestimonial();

function updateTestimonial() {
    progressBar.addEventListener('animationiteration', () => {
        const { name, position, photo, text } = testimonials[index]
        testimonial.innerHTML = text
        userImage.src = photo
        username.innerHTML = name
        role.innerHTML = position

        index++

        if(index > testimonials.length - 1) {
            index = 0
        }
    })  
}





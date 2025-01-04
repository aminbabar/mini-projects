
document.addEventListener("DOMContentLoaded", () => {
    const API_BASE_URL = 'http://localhost:3000/api/testimonials';
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const API_URL = 'https://api.frontendexpert.io/api/fe/testimonials';

    const testimonials = [];
    let hasNext = true;
    const testimonialContainer = document.querySelector("#testimonial-container");

    function fetchData(limit, after) {
        fetch(`${API_BASE_URL}?limit=5`)
            .then(data => data.json())
            .then(data => {
                if (!data.hasNext) {
                    hasNext = false;
                }
                addTestimonial(data.testimonials);
            });
    }

    function addTestimonial(testimonials) {
        const container = document.createDocumentFragment();
        testimonials.forEach((testimonial) => {
            const p = document.createElement('p');
            p.append(testimonial.message);
            p.classList.add('testimonial');
            container.append(p);
        });
        testimonialContainer.append(container);
    }

    fetchData(5);
});

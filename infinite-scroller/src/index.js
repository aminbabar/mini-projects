
document.addEventListener("DOMContentLoaded", () => {
    const API_BASE_URL = 'http://localhost:3000/api/testimonials';
    const LIMIT = 5;
    let hasNext = true;
    let after = "";
    let canFetch = true;


    const testimonialContainer = document.querySelector("#testimonial-container");
    testimonialContainer.addEventListener("scroll", handleScroll);

    function fetchData(after) {
        canFetch = false;
        if (hasNext) {
            return fetch(`${API_BASE_URL}?limit=${LIMIT}&after=${after}`)
                .then(data => data.json())
                .then(data => {
                    if (!data.hasNext) {
                        hasNext = false;
                    }
                    addTestimonial(data.testimonials);
                    canFetch = true;
                });
        } else {
            testimonialContainer.removeEventListener("scroll", handleScroll);
        }
    }


    function handleScroll(e) {

        const spaceToBottom = this.scrollHeight - this.scrollTop - this.clientHeight;

        if (spaceToBottom > 0) return;
        canFetch && fetchData(after);
    }


    function addTestimonial(testimonials) {
        const container = document.createDocumentFragment();
        testimonials.forEach((testimonial) => {
            const p = document.createElement('p');
            p.append(testimonial.message);
            p.classList.add('testimonial');
            container.append(p);

            after = testimonial.id;
        });
        testimonialContainer.append(container);
    }

    fetchData(after);
});

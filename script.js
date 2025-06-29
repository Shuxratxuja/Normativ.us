// Slide show

const slides = document.querySelectorAll(".slideshow")
        const indicators = document.querySelectorAll(".slider__indicators")

        let currentIndex = 0
        let interval

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index)
            })

            indicators.forEach((btn, i) => {
                btn.classList.toggle("indicators-actv", i === index)
            })

            currentIndex = index
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length
            showSlide(currentIndex)
        }

        function startSlider() {
            interval = setInterval(nextSlide, 3000)
        }

        function stopSlider() {
            clearInterval(interval)
        }

        indicators.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                stopSlider()
                showSlide(index)
                setTimeout(() => {
                    startSlider()
                }, 5000)
            })
        })

        showSlide(currentIndex)
        startSlider()

        // Timer aylanishi

        const daysEl = document.querySelectorAll(".sales__timer-item")[0]
        const hoursEl = document.querySelectorAll(".sales__timer-item")[1]
        const minutesEl = document.querySelectorAll(".sales__timer-item")[2]
        const secondsEl = document.querySelectorAll(".sales__timer-item")[3]

        const TIMER_KEY = "flash-sale-end-time"
        let endTime = localStorage.getItem(TIMER_KEY)

        if (!endTime) {
            const now = new Date()
            now.setDate(now.getDate() + 3)
            endTime = now.getTime()
            localStorage.setItem(TIMER_KEY, endTime)
        } else {
            endTime = parseInt(endTime)
        }

        function updateTimer() {
            const now = new Date().getTime()
            const diff = endTime - now

            if (diff <= 0) {
                clearInterval(timerInterval)
                daysEl.textContent = "00"
                hoursEl.textContent = "00"
                minutesEl.textContent = "00"
                secondsEl.textContent = "00"
                alert("Aksiya yakunlandi!")
                localStorage.removeItem(TIMER_KEY)
                return
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)

            daysEl.textContent = String(days).padStart(2, "0")
            hoursEl.textContent = String(hours).padStart(2, "0")
            minutesEl.textContent = String(minutes).padStart(2, "0")
            secondsEl.textContent = String(seconds).padStart(2, "0")
        }

        const timerInterval = setInterval(updateTimer, 1000)
        updateTimer()


            // Rustamxojayev Shuxratxoja
            // Modal

        const modal = document.querySelector('.modal')
        const modalImage = document.querySelector('.modal__image')
        const modalName = document.querySelector('.modal__name')
        const modalPrice = document.querySelector('.modal__price')
        const modalRating = document.querySelector('.modal__rating')
        const modalCloseBtn = document.querySelector('.modal__close')
        const overlay = document.querySelector('.modal__overlay')
        const viewBtn = document.querySelectorAll('.view__btn')

        viewBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const product = btn.closest('.products')

                const imageSrc = product.querySelector('.product__image').src
                const name = product.querySelector('.product__name').textContent
                const price = product.querySelector('.current__price').textContent
                const ratingCount = product.querySelector('.rating__count').textContent

                modalImage.src = imageSrc
                modalName.textContent = name
                modalPrice.textContent = `Price: ${price}`
                modalRating.textContent = `Rating: ${ratingCount}`

                modal.classList.remove('hidden')
            })
        })

        modalCloseBtn.addEventListener('click', () => {
            modal.classList.add('hidden')
        })

        overlay.addEventListener('click', () => {
            modal.classList.add('hidden')
        })




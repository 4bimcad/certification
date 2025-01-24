    document.getElementById("customForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Отключить стандартное поведение формы
        const loading = document.querySelector(".loading");
        const sentMessage = document.querySelector(".sent-message");
        const errorMessage = document.querySelector(".error-message");

        // Показать индикатор загрузки
        loading.style.display = "block";
        sentMessage.style.display = "none";
        errorMessage.style.display = "none";

        // Отправить данные на сервер
        const formData = new FormData(this);
        fetch("https://formspree.io/f/mnnjqwoo", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                loading.style.display = "none";
                if (response.ok) {
                    sentMessage.style.display = "block"; // Показать успешное сообщение
                } else {
                    sentMessage.style.display = "block"; // Также показываем успех, даже при ошибке
                }
            })
            .catch(() => {
                loading.style.display = "none";
                sentMessage.style.display = "block"; // Показать успех в любом случае
            });
    });

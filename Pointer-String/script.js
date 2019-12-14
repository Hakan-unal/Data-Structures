let button, input, result;
// Html üzerindeki gerekli yerler yakalandı
button = document.querySelector("#button");
input = document.querySelector("#input");
result = document.querySelector("#result");

// button değişkenine click event'i gerçekleştiğinde aşağıdaki eylemler gerçekleşir
button.addEventListener("click", () => {
    // Eğer input değişkeninin value'si boşluksa ekrana uyarı yazısı gösterilir
    if (input.value === "") {
        alert("INVALID VALUE");
    }
    else {
        let string, count;
        // string değişkeni içerisine input değişkeninin value'si array'e dönüştürülerek aktarılır 
        string = Array.from(input.value);
        // bir metni ters çavirmek için o metnin eleman sayısının yarısı kadar çalışmak yeterlidir 
        // bu yüzden aşağıdaki count değişkenine array'in uzunluğunun yarısı aktarılmıştır
        count = string.length / 2;
        for (let i = 0; i < count; i++) {
            let temp;
            temp = string[i];
            // i indisi 0 olduğunda array'in ilk elemanını yakalar string.length -1-i ise 
            // son elemanı gösterir ve değişiklik bu şekilde yapılır
            string[i] = string[string.length - 1 - i];
            string[string.length - 1 - i] = temp;
        }
        result.value = string.join("");
    }
});


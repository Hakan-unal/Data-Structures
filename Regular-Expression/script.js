let string, a, b, sendA, sendB, sendString, result, array, count;

// Html üzerindeki gerekli input boxlar yakalandı
string = document.querySelector("#box");
a = document.querySelector("#aValue");
b = document.querySelector("#bValue");
result = document.querySelector("#result");

// Html üzeindeli gerekli buttonlar yakalandı
sendA = document.querySelector("#aSend");
sendB = document.querySelector("#bSend");
sendString = document.querySelector("#stringSend");

array = [];
count = 0;

class Regular {

    static display(val) {
        // Fonksiyona gönderilen val değişkeni result değişkeninin value'sine atandı 
        result.value = val;
    }

    static push(val) {
        // Fonksiyona gönderilen val değişkeni array değişkenine eleman olarak gönderildi
        array.push(val);
    }

    static calculate(deleted, value) {
        let results;

        results = () => {
            // array'in uzunluğu silinecek kısımdan büyükse koşul sağlanır ve aşağıdaki işlem gerçekleşir
            if (array.length >= deleted) {
                // array içerisindeki eleman sayısı deleted değişkeni içerisinde gelen sayı kadar azaltılır
                for (let i = 0; i < deleted; i++) {
                    array.pop();
                }
                // Regular class'ı içerisindeki display fonksiyonu içerisine array gönderilir
                // join methodu array'i görüntülerken virgüllerden kurtarmak için
                Regular.display(array.join(""));
                // İşlem gerçekleştikten sonra count value değişkeni içerisinde gelen değer kadar azaltılır 
                // (Bu kısım projede belirtilen koşulllara bakılırsa daha rahat anlaşılır)
                count -= value;
            }
            // Eğer array'in uzunluğu 0'a eşitlenmişse ilk koşul sağlanmıştır
            else if (array.length === 0) {
                // Eğer count değişkenide 0'a eşitse tüm koşullar sağlanmıştır ve hem array hem de exponent 0'lanmıştır
                //  ve ifade regulardır.Bu yüzden id'si check olan html elementinin valuesine "Regular :)" ifadesi yazılır
                if (count === 0) {
                    document.querySelector("#check").value = "Regular :)";
                }
                // Eğer count 0 değilse 2.  koşul sağlanmamıştır ve ifade regular değildir
                else {
                    document.querySelector("#check").value = "No regular :(";
                }
            }
            // array'in eleman sayısı silinecek değerden büyük değilse ifade doğal olarak regular değildir
            // id'si check olan html elementinin value'sine "No regular:(" yazılır. 
            else {
                document.querySelector("#check").value = "No regular:(";
            }
        }
        // Görsellik katmak amaçlı yapıldı adım adım göstemek için kullanılıyor results fonksiyonu 2.5 
        // saniyede bir çağırılıyor
        setInterval(() => {
            results();
        }, 2500);
    }
}

sendString.addEventListener("click", () => {
    // sendString değişkenine click eventi gerçekleştiğinde val değişkeni array olarak tanımlanır ve 
    // string değişkeninin value'si val değişkeni içerisine atılır
    let val = new Array();
    val = string.value;
    // Eğer val array'inin ilk değeri "a" ise projede bizden istenen ilk kısım a olur 
    if (val[0] === "a") {
        // array'in toplam eleman sayısı kadar döngü çalışır "a" gördüğünde val array'i içerisine atar
        for (let i = 0; i < val.length; i++) {
            if (val[i] === "a") {
                Regular.push(val[i]);
            }
            // "b" gördüğünde count değerini arttırır buradaki count 2. değerin ifade içerisinde toplam kaç 
            // defa geçtiğini gösterecek
            else if (val[i] === "b") {
                count++;
            }
        }
        // a ve b değişkenlerinin value'si a ve b değişkeni içerisine tanımlanarak Regular class'ı üzerinden 
        // calculate fonksiyonu içerisine gönderilir
        b = Number(b.value);
        a = Number(a.value);

        Regular.calculate(a, b);
    }
    // Eğer val array'inin ilk değeri "b" ise projede bizden istenen ilk kısım b olur 
    else if (val[0] === "b") {
        // array'in toplam eleman sayısı kadar döngü çalışır "b" gördüğünde val'i array'in içerisine atar
        for (let i = 0; i < val.length; i++) {
            if (val[i] === "b") {
                Regular.push(val[i]);
            }
            // "a" gördüğünde count değerini arttırır buradaki count 2. değerin ifade içerisinde toplam kaç 
            // defa geçtiğini gösterecek
            else if (val[i] === "a") {
                count++;
            }
        }
        // b ve a değişkenlerinin value'si b ve a değişkeni içerisine tanımlanarak Regular class'ı üzerinden 
        // calculate fonksiyonu içerisine gönderilir
        b = Number(b.value);
        a = Number(a.value);

        Regular.calculate(b, a);
    }
});

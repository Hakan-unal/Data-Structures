let array1, array2, box1, box2, display1, display2, send1, send2, sort1, sort2, check;
// Her işlem için ayrı ayrı fonksiyon yazmışsın onları düzelt her işlemi tek fonksiyona 
// indirge!!!

// Kullancının giriceği verilere göre doldurulacak 2 boş array tanımlandı
array1 = [];
array2 = [];

// Html üzerindeki gerekli kutucuklar yakalandı
box1 = document.querySelector("#box1");
box2 = document.querySelector("#box2");
display1 = document.querySelector("#display1");
display2 = document.querySelector("#display2");

// Html üzerindeki gerekli buttonlar yakalandı
send1 = document.querySelector("#array1");
send2 = document.querySelector("#array2");
sort1 = document.querySelector("#sort1");
sort2 = document.querySelector("#sort2");
check = document.querySelector("#check");

class Subnet {
    // Bu fonksiyona gelen değerler numeric bir değere çevrilerek push methodu ile 
    // array1'in içerisine aktarıldı
    static createArray1(value) {
        array1.push(Number(value));
        // Değerin girildiği kutucuk temizlendi (Daha güzel bir görünüm için fonksiyonel bir amacı yok)
        box1.value = "";
    }
    // Bu fonksiyona gelen değerler numeric bir değere çevrilerek push methodu ile 
    // array2'in içerisine aktarıldı
    static createArray2(value) {
        array2.push(Number(value));
        // Değerin girildiği kutucuk temizlendi (Daha güzel bir görünüm için fonksiyonel 
        // bir amacı yok)
        box2.value = "";
    }
    // Bu fonksiyona gönderilen array bubble sort kullanılarak sıralandı ve fonksiyonun 
    // çağırıldığı yere array'in sıralanmış halini return etti
    static sort(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp;
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
    // array1 ve array2 bu fonksiyona girdiklerinde ilk for array1'in eleman sayısı kadar çalışır ikinci 
    // for ise array'nin eleman sayısı kadar çalışır
    // Burada tanımlanan count değişkeni size oalrak küçük array'in büyük array içerisinde kaç defa 
    // eşleşme olduğunu tutar eğer eşleşme sayısı küçük olan array'in eleman sayısına eşitse tüm elemanlar 
    // ile eşleşme sağlanmıştır ve gerekli kutucukları ok veya duruma göre no yazar
    // !!!!
    // Buradaki algoritma hatalı büyük veya küçük array'de aynı elemandan 2 tane olduğunda count sayısı 
    // küçük array'in eleman sayısını vermiyor ve hatalı sonuç buluyor
    static bigArray1() {
        let count = 0;
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array2[j] === array1[i]) {
                    count++;
                    i++;
                }
            }
        }
        console.log(count);
        if (array2.length == count) {
            document.querySelector("#isSubnet1").value = "OK";
            document.querySelector("#isSubnet2").value = "NO";

        }
        else {
            document.querySelector("#isSubnet1").value = "NO";
            document.querySelector("#isSubnet2").value = "NO";
        }
    }
    // array1 ve array2 bu fonksiyona girdiklerinde ilk for array1'in eleman sayısı kadar 
    // çalışır ikinci for ise array'nin eleman sayısı kadar çalışır
    // Burada tanımlanan count değişkeni size oalrak küçük array'in büyük array 
    // içerisinde kaç defa eşleşme olduğunu tutar eğer eşleşme sayısı küçük olan array'in 
    // eleman sayısına eşitse tüm elemanlar ile eşleşme sağlanmıştır ve gerekli kutucukları 
    // ok veya duruma göre no yazar
    // !!!!
    // Buradaki algoritma hatalı büyük veya küçük array'de aynı elemandan 2 tane 
    // olduğunda count sayısı küçük array'in eleman sayısını vermiyor ve hatalı sonuç 
    // buluyor
    static bigArray2() {
        let count = 0;
        for (let i = 0; i < array2.length; i++) {
            for (let j = 0; j < array1.length; j++) {
                if (array1[j] === array2[i]) {
                    count++;
                    i++;
                }
            }
        }
        if (array1.length == count) {
            document.querySelector("#isSubnet1").value = "NO";
            document.querySelector("#isSubnet2").value = "OK";

        }
        else {
            document.querySelector("#isSubnet1").value = "NO";
            document.querySelector("#isSubnet2").value = "NO";
        }
    }

}

// Gerekli eventler burada çalışıyor değişkenler yukarıda tanımlı ve bu elementler 
// üzerinden işlemler yapılıyor
send1.addEventListener("click", (event) => {
    Subnet.createArray1(box1.value);
});

send2.addEventListener("click", () => {
    Subnet.createArray2(box2.value);
});

sort1.addEventListener("click", () => {
    let val;
    val = Subnet.sort(array1);
    display1.value = val;
});

sort2.addEventListener("click", () => {
    let val;
    val = Subnet.sort(array2);
    display2.value = val;
});

check.addEventListener("click", () => {
    if (array1.length > array2.length) {
        Subnet.bigArray1();
    }
    else if (array2.length > array1.length) {
        Subnet.bigArray2();
    }
});

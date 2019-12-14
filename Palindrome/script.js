let xhr, arr, val, count, button, box, box1;
// Asenkron işlem yapılacağı için xhr değişkenini XMLHttpRequest class'ı üzerinden tanımladık
xhr = new XMLHttpRequest();
// xhr objesini açtık ilk bölüm getir komutu ikinci komut dosyanın adresi(script.js ile aynı konumda 
// olduğu için herhangi başka bir şey belirtmedik)üçüncü kısım da ise asenkron çalışmasına true dedik
xhr.open("GET", "doc.json", true);
arr = [];
button = document.querySelector("#button");
box = document.querySelector("#box");
box1 = document.querySelector("#box1");

class Queue {
  // Bu tanım ödev içeriğinde kuyruk yapısı kullanın denildiği için yazıldı böyle bir tanımlamaya ihtiyaç yok
  static enqueue(array, val) {
    array.push(val);
  }
  static dequeue(array) {
    return array.shift();
  }
}

class Palindrome {
  // Bu fonksiyona gönderilen array öncelikle box1 olarak tanımlanan değişkenin value'sine yazılır
  static calculate(array) {
    box1.value = array;
    // Eğer array'in içerisinde eleman yoksa bu bir palindrome ifadedir
    if (array.length === 0) {
      box.value = "PALINDROME";
    }
    // Eğer array'in içerisinde 1 eleman varsa bu bir palindrome ifadedir
    else if (array.length === 1) {
      box.value = "PALINDROME";
    }
    // Eğer array'in içerisinde 2 veya daha fazla eleman varsa bu ifadenin palindrome olup olmadığını
    // kontrol etmemiz gerekir
    else if (array.length >= 2) {
      let temp, temp1;
      // temp değişkenine array'in son elemanı atanır temp1 değişkenine ise array'in ilk elemanı atanır
      temp = array.pop()
      temp1 = Queue.dequeue(array)
      // Eğer bu iki değişken birbirine eşitse zaten pop ve dequeue fonksiyonları ile bu değerler array 
      // içerisinden çıkartılmıştı eşitlik durumunda baştan ve sondan silindiler ve başka bir şey yapmamıza 
      // gerek yok
      if (temp === temp1) {
      }
      // Eğer baştaki ve sondaki ifade birbirine eşit değilse ödevde istenen şekilde sondan çıkartılan 
      // eleman array'in hem sonuna hem başına eklenir ve bu işlem array içerisindeki ifade palindrome 
      //oluncaya kadar devam eder
      else if (temp != temp1) {
        array.push(temp1);
        array.unshift(temp1);
      }
      // else bloğu ifade palindrome oluncaya kadar box değişkeninin value'sine not palindrome yazısını 
      // gönderir
      else {
        box.value = "NOT PALINDROME";

      }
    }
  }
}
// button değişkenine click event'i gerçekleştiğinde aşağıdaki eylemler gerçekleşir
button.addEventListener("click", () => {
  xhr.onload = function () {
    // xhr objesi yüklendiğinde bu fonksiyon çalıştı
    // status değeri sayfanın yüklendiğini belirtir ve bu işlem sayfa üzerindeki her şey yüklendiğinde çalışır 
    if (this.status === 200) {
      let value;
      // value değişkeni içerisine xhr objesi içerisindeki text gönderilir
      value = JSON.parse(this.responseText);
      // val değişkeni içerisine value üzerindeki text'in her boşluk karakteri için boşluktan önceki eleman ayrılır      
      val = value.array[0].string.split(" ");
      // val üzerindeki her bir eleman çağrılır ve enqueue fonksiyonu ile arr array içerisine eklenir
      val.forEach((element) => {
        Queue.enqueue(arr, element);
      });
      // Bu işlem sadece görsellik kazandırmak amaçlı yazıldı ve her 1 saniyede aşağıdaki fonksiyonu çağırıyor
      setInterval(() => {
        Palindrome.calculate(arr);
      }, 1000);
    }
  }
  xhr.send();
});
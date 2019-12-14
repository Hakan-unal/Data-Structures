let input, output, send, display;
// Html üzerindeki gerekli yerler yakalandı
input = document.querySelector("#input");
output = document.querySelector("#output");
send = document.querySelector("#send");
display = document.querySelector("#output");

class Node {
    // Bu class üzerinden oluşturulan objenin içerisinde constructor'a gönderilen data 
    // bulunuyor ayrıca oluşturulan objenin left'i ve right'ı null'e eşitleniyor çünkü 
    // ağaç yapısı düşünüldüğünde eklenen son node'un hiçbir zaman altında dallanma olmaz
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    // Bu class üzerinden oluşturulan objenin root değişkeni null'e eşitleniyor çünkü 
    // boş bir ağacın hiçbir nodu'u olmaz buna root'da dahil
    constructor() {
        this.root = null;
    }
    // Bu fonksiyona gelen data değişkeni newNode olarak Node class'ı üzerinden tanımlanıyor
    // Eğer gelen veri ağacın ilk elemanı ise ağacın mevcut root'u 0'dır ve gelen data ağacın root'u olarak eklenir
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        // Eğer root 0 değilse ağaçta daha önceden eklenen eleman var demektir ve ağaç üzerinde kaç eleman 
        // olduğu ile ilgili fikrimiz olamaz bununiin ayrı bir fonksiyon kullanmak gerekli
        else {
            // Burada root ve yeni eklenecek olan node insertNode fonksiyonu içerisine gönderilir
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        // Eğer node'un datası newNode'un datasından büyükse yeni gelen eleman sol tarafa eklenmelidir
        if (newNode.data < node.data) {
            // Eğer node'un left'i null'se yani daha önceden eklenmiş eleman yoksa yeni gelen node için 
            // uygun yer burasıdır ve node'un left'ine newNode değişkeni tanımlanır
            if (node.left === null) {
                node.left = newNode;
            }
            // Eğer Node'un left'i null değilse daha önceden eklenen eleman vardır ve binary tree yapısını
            // düşündüğümüzde aşağılara doğru daha da dallanma olmuştur diyebiliriz bu yüzden fonksiyonu 
            // node'un left'i ve newNode ile tekrar çağırıyoruz
            else {
                this.insertNode(node.left, newNode);
            }
        }
        // Eğer node'un datası newNode'un datasından küçükse yeni gelen eleman sağ tarafa eklenmelidir
        else {
            // Eğer node'un right'ı null'se yani daha önceden eklenmiş eleman yoksa yeni gelen node için 
            // uygun yer burasıdır ve node'un right'ıne newNode değişkeni tanımlanır
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                // Eğer Node'un right'ı null değilse daha önceden eklenen eleman vardır ve binary tree yapısını
                // düşündüğümüzde aşağılara doğru daha da dallanma olmuştur diyebiliriz bu yüzden fonksiyonu 
                // node'un right'ı ve newNode ile tekrar çağırıyoruz
                this.insertNode(node.right, newNode);
            }
        }
        // Yukarıda yapılan tüm işlemler eğer anlaşılmıyorsa kağıt kalem ile ağaca ekleme yap ve kod ile 
        // karşılaştır ağaçta kaç eleman olduğunun önemi yok çünkü fonksiyon kendi kendisini tekrar 
        // çağırıyor ve newNode için uygunyeri bulana kadar çalışıyor
    }
    postorder(node) {
        // !!!
        // Kodu yazarken mantıklı gelmişti ama sonradan çalışma mantığını unuttum bu kısmı birilerine sor
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            display.value += node.data + "  ";
        }
    }
}

let tree;
tree = new Tree();

send.addEventListener("click", () => {
    // Projede istenen kurala göre kullancıı 0 girene kadar ağaca ekleme yapılacaktır 0 girildiğinde 
    // ise post order mantığına göre ağaç yapısı ekranda listelenecektir
    val = Number(input.value);
    if (val !== 0) {
        tree.insert(val);
        input.value = "";
    }
    else if (val === 0) {
        tree.postorder(tree.root);
    }
});

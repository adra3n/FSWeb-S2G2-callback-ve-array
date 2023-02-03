const { fifaData } = require('./fifa.js')


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */


	const filterFifaData = fifaData.filter((item)=>{
		return  item.Year === 2014 && item["Stage"] === "Final";
	}) 
	
//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)

console.log(filterFifaData[0]["Home Team Name"]);
//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
console.log(filterFifaData[0]["Away Team Name"]);
//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
console.log(filterFifaData[0]["Home Team Goals"]);
//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
console.log(filterFifaData[0]["Away Team Goals"]);
//(e) 2014 Dünya kupası finali kazananı*/

// if (filterFifaData[0]["Home Team Goals"]>filterFifaData[0]["Away Team Goals"])
// {console.log(filterFifaData[0]["Home Team Name"])} else { 
// 	{console.log(filterFifaData[0]["Away Team Name"])}
// }


/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(arr) {
	
	return arr.filter((object)=> object.Stage === "Final")

}



/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

	
		function Yillar(arr, callback) {
			const years = callback(arr).map(mac => mac.Year);
			return years;
			}

		

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

function Kazananlar(arr, callback) {
	const kazananlar = callback(arr).map(mac => {
    
		if (mac["Home Team Goals"]>mac["Away Team Goals"])
			{return mac["Home Team Name"];} 
			else 
			{{return mac["Away Team Name"];}}

	})
	return kazananlar;
}


/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

// function YillaraGoreKazananlar(arr, finallerCB, yillarCB, kazananlarCB ) {
	
// 	const finaller = finallerCB(arr);
	
// 	const yil =  yillarCB(arr, Finaller(arr)) 


// 	yillarCB(arr, Finaller(arr)) 

//     yıl = yillarCB
// 	ülke = kazananlarCB

// 	const finalSonuc = `${yıl} yılında, ${ülke} dünya kupasını kazandı!`;


// 	return finalSonuc;


// }

function YillaraGoreKazananlar(arr, finallerCB, yillarCB, kazananCB) {

const yillar = yillarCB(arr, finallerCB);
const kazananlar = kazananCB(arr, finallerCB);

// return yillar.map((yil, i) => {
// return `${yil} yılında, ${kazananlar[i]} dünya kupasını kazandı!`;
// });
 return kazananlar.map((kazanan, i) =>
 {
	return `${yillar[i]} yılında, ${kazanan} dünya kupasını kazandı!`;
 })
}


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(arr) {
	let toplamGol = arr.reduce((toplam,item)=>{
		return toplam + item["Home Team Goals"] + item["Away Team Goals"];

	},0)
	return (toplamGol/arr.length).toFixed(2);
	}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

let initials = [];

Finaller(fifaData).forEach(i=>{
	if(!initials.includes(i["Home Team Initials"])){
	 initials.push(i["Home Team Initials"]);

	}
	if(!initials.includes(i["Away Team Initials"])){
	 initials.push(i["Away Team Initials"])
 
	}
})


function UlkelerinKazanmaSayilari(arr, initials) {
	let kazananTakimlar = {};
	initials.forEach(i=>{
		kazananTakimlar[i]= 0;
	})
	Finaller(fifaData).forEach(i=>{
		if(i["Home Team Goals"]> i["Away Team Goals"]){
			kazananTakimlar[i["Home Team Initials"]]++ ;
		} else {
			kazananTakimlar[i["Away Team Initials"]]++ ;
		}

	})
	return kazananTakimlar;
}


/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */


function EnCokGolAtan(data, initials) {
	let takimlar = {};
	initials.forEach(((i)=>{
		takimlar[i] = 0;
	}))	

	Finaller(data).forEach((i)=>{
		takimlar[i["Home Team Name"]] += i["Home Team Goals"];
		takimlar[i["Away Team Name"]] += i["Away Team Goals"];
	})

	let enFazlaGol = 0;
	let enFazlaGolAtan = "";

	for(let propertyAdi in takimlar){
		if(takimlar[propertyAdi]>enFazlaGol){
			enFazlaGol = takimlar[propertyAdi];
			enFazlaGolAtan = propertyAdi;
		} 
		
	}
	return enFazlaGolAtan;
}

console.log(EnCokGolAtan(fifaData, initials));



/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

// function EnKotuDefans(data, initials) {
	
// 	let takimlar = {};
// 	initials.forEach(((i)=>{
// 		takimlar[i] = 0;
// 	}))	

// 	Finaller(data).forEach((i)=>{
// 		takimlar[i["Home Team Name"]] += i["Home Team Goals"];
// 		takimlar[i["Away Team Name"]] += i["Away Team Goals"];
// 	})

	
// let enCokGolYiyen = 0;
// let enCokGolYiyenTakim = "";

// for(let propertyAdi in takimlar){
// 	
// 	} 
	
// }
// return enCokGolYiyenTakim;
// }

// console.log(EnKotuDefans(fifaData, initials));





	



/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}

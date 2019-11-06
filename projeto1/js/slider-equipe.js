$(function(){
	var delay = 3000; 
	var posicaoAtual = 0;
	var amt;

	iniciarSlide(); //iniciou o slide
	autoPlay(); //iniciou o play automático
	clicarSpan();
	
	function iniciarSlide(){
		amt = $('section.chamada3 div.parte2 div.autor').length;
		/*vc está guardando na variável amt o tamanho da div autor*/
		
		var sizeContainer = 100 * amt; //dá 300 //vai ficar em porcentagem
		var sizeboxSingle = 100 / amt; //dá 33.3 //vai ficar em porcentagem
		
		$('section.chamada3 div.parte2 div.autor').css('width',sizeboxSingle+'%');
		/*vc está pegando a div autor e colocando a largura da variável 
		sizeBoxSingle em porcentagem*/
		$('section.chamada3 div.parte2 div.scrollEquipe div.scroll-wraper').css('width',sizeContainer+'%');
		/*vc está pegando a div mãe da div autor que é a div scroll-wraper e está
		colocando a largura do sizeContainer tbm em porcentagem*/

		for(i = 0; i < amt; i++){
			if(i == posicaoAtual){
				$('.slider-bullets').stop().append('<span style="background-color:#909090;"></span>');
			}else{
				$('.slider-bullets').stop().append('<span></span>');
			}
		}
		/*vc inicia um contador com 0
		vai verificar se o contador é menor que o tamanho da div autor,
		enquanto for menor vc vai adicionar mais*/

		/*se o contador for igual a posiçãoAtual então vc adiciona
		através do append na div slider-bullets um span com uma cor diferente*/
		/*se o contador for diferente da posiçãoAtual então vc adiciona só um span normal.*/
	}

	function clicarSpan(){
		$('section.chamada3 div.parte2 div.slider-bullets span').click(function(){
			posicaoAtual++;
			if(posicaoAtual == amt){
				posicaoAtual = 0;
			}
			goToSlider(posicaoAtual);
		});
	}


	function autoPlay(){
		setInterval(function(){
			posicaoAtual++; /*vai adicionar mais um a posiçãoAtual*/
			
			if(posicaoAtual == amt){
				posicaoAtual = 0;
				/*se a posiçãoAtual tiver o mesmo valor que o amt então a posiçãoAtual
				vai ser igual a 0*/
			}
			
			goToSlider(posicaoAtual);
		},delay);
	}

	function goToSlider(posicaoAtual){
		var offSetX = $('section.chamada3 div.parte2 div.scrollEquipe div.scroll-wraper div.autor').eq(posicaoAtual).offset().left
		/*vai pegar a posiçãoAtual da div autor e vai dar um left*/ 
		- $('section.chamada3 div.parte2 div.scrollEquipe div.scroll-wraper').offset().left;
		/*vai fazer ela - a div.scroll-wraper e tbm dar um left*/
		
		$('section.chamada3 div.parte2 div.slider-bullets span').css('background-color','#ccc');
		/*vai pegar o span e dar a cor de cinza*/
		$('section.chamada3 div.parte2 div.slider-bullets span').eq(posicaoAtual).css('background-color','#909090');
		/*vai pegar a posição atual do span e dar uma cor diferente*/	
		$('section.chamada3 div.parte2 div.scrollEquipe').stop().animate({'scrollLeft':offSetX});
	}

	$(window).resize(function(){
		$('section.chamada3 div.parte2 div.scrollEquipe').stop().animate({'scrollLeft':0});
	})

})
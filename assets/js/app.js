$(document).ready(function () {
  var counterPack = 0;
  var counterNumber = 09530;

  $('.counterPack').html(counterPack);
  $('.counterPrice').html(counterPack);
  $('.counter__number span').html(counterNumber);

  //Incrementa el valor

  $('.more').click(function() {
    if(counterPack < 2) {
      counterPack++;
      counterNumber--;
      $('.counterPack').html(counterPack);
      $('.counterPrice').html(counterPack);
      $('.counter__number span').html(counterNumber);
    }
  });

  //Disminuye le valor

  $('.less').click(function() {
    if(counterPack > 0) {
      counterPack--;
      counterNumber++;
      $('.counterPack').html(counterPack);
      $('.counterPrice').html(counterPack);
      $('.counter__number span').html(counterNumber);
    }
  });

  $('.order').click(function () { 
    if(counterPack == 0) {
      alert('Parcero, debes pedir al menos 1 pack');
    }
    else {
      $('.pre-order').hide();
      $('.success').fadeIn();
    }
  });

  $('.main__scroll-down').click(function (e) { 
    e.preventDefault();
    $("html, body").animate({ scrollTop: $('.col-black').offset().top }, 1000);
  });
});
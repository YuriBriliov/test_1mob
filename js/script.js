function toggle(el)
{
	el.style.display = (el.style.display == 'none') ? 'block' : 'none';
}

ymaps.ready(init);
    var myMap,
        myPlacemark1;
        myPlacemark2;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [55.75452093, 37.62505870],
            controls: ['smallMapDefaultSet'],
            zoom: 12
        });

        myPlacemark1 = new ymaps.Placemark([55.75048523, 37.60537096], {
          balloonContentHeader: 'yellowvibecoffee',
          balloonContentBody: 'yellowvibecoffee',
          balloonContentFooter: 'yellowvibecoffee',
          hintContent: 'yellowvibecoffee'
        },{
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [36, 40],
        iconImageOffset: [-3, -42]
        });
        myPlacemark2 = new ymaps.Placemark([55.75864028, 37.65915550], {
          balloonContentHeader: 'yellowvibecoffee',
          balloonContentBody: 'yellowvibecoffee',
          balloonContentFooter: 'yellowvibecoffee',
          hintContent: 'yellowvibecoffee'
        },{
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [36, 40],
        iconImageOffset: [-3, -42]
        });

          myMap.geoObjects.add(myPlacemark1);
          myMap.geoObjects.add(myPlacemark2);
    }

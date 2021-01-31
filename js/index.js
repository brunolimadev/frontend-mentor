(function(){

    let slider = document.getElementById('range');

    let pageviews = document.getElementById('pageviews');

    let pageviewsValue = document.getElementById('value');

    let wrapperInputRange = document.getElementById('wrapper-range');

    const pageviewSettings = [
        {
            views: '10K',
            value: 8.00
        },
        {
            views: '50K',
            value: 12.00
        },
        {
            views: '100K',
            value: 16.00
        },
        {
            views: '500K',
            value: 24.00
        },
        {
            views: '1M',
            value: 36.00
        },
    ]

    slider.min = 0;

    slider.max = pageviewSettings.length - 1;

    slider.step = 1;

    slider.value = Math.round((pageviewSettings.length - 1) / 2);

    pageviews.innerHTML = `${pageviewSettings[slider.value].views} PAGEVIEWS`;

    pageviewsValue.innerHTML = `$${pageviewSettings[slider.value].value.toFixed(2)}`;


    // window.addEventListener('resize', () => {
    //     if(window.visualViewport.width <= 375){
    //         pageviews.insertAdjacentElement('afterend', wrapperInputRange);
    //     }else{
    //         document.querySelector('.main__content').insertBefore(wrapperInputRange, 1);
    //     }
    // })
    
    
    slider.addEventListener("mousemove", () => {
        var x = slider.value;
        var color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${getPercentColor(x)}%, hsl(224, 65%, 95%) ${getPercentColor(x)}%)`;
        slider.style.background = color;
    });
    
    slider.addEventListener("input", () => {
        pageviews.innerHTML = `${pageviewSettings[slider.value].views} PAGEVIEWS`;
        pageviewsValue.innerHTML = `$${pageviewSettings[slider.value].value.toFixed(2)}`;
    })

    function getPercentColor(value){
        let x = pageviewSettings.length - 1;
        let y = (value * 100) / x;
        return y;
    }


   
})();

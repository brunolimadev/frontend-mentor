(function(){

    let slider = document.getElementById('range');

    let pageviews = document.getElementById('pageviews');

    let pageviewsValue = document.getElementById('value');

    let wrapperInputRangeParent = document.getElementById('wrapper-range').parentNode;
    let wrapperInputRange = document.getElementById('wrapper-range');

    let boxValueParent = document.getElementById('box-value').parentElement;
    let boxValue = document.getElementById('box-value');

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

    sliderSettings(0, pageviewSettings.length, 1);
    changePageViewsAndValuePerMonth();
    getScreenSizeAndAdjustInputRangePosition();


    window.addEventListener('resize', () => {
        getScreenSizeAndAdjustInputRangePosition();
    })
    
    
    slider.addEventListener("mousemove", () => {
        var x = slider.value;
        var color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${getPercentColor(x)}%, hsl(224, 65%, 95%) ${getPercentColor(x)}%)`;
        slider.style.background = color;
    });
    
    slider.addEventListener("input", () => {
        pageviews.innerHTML = `${pageviewSettings[slider.value].views} PAGEVIEWS`;
        pageviewsValue.innerHTML = `$${pageviewSettings[slider.value].value.toFixed(2)}`;
    })

    function sliderSettings(min = 0, max = 10, step){
        slider.min = min;
        slider.max = max - 1;
        slider.step = step;
        slider.value = Math.round((max - 1) / 2);
    }

    function changePageViewsAndValuePerMonth(){
        pageviews.innerHTML = `${pageviewSettings[slider.value].views} PAGEVIEWS`;
        pageviewsValue.innerHTML = `$${pageviewSettings[slider.value].value.toFixed(2)}`;
    }

    function getPercentColor(value){
        let x = pageviewSettings.length - 1;
        let y = (value * 100) / x;
        return y;
    }

    function getScreenSizeAndAdjustInputRangePosition(){
        if(window.visualViewport.width <= 376){
            boxValueParent.appendChild(wrapperInputRange);
            wrapperInputRangeParent.appendChild(boxValue);
            boxValueParent.classList.add('my-3')
        }else{
            boxValueParent.appendChild(boxValue);
            wrapperInputRangeParent.appendChild(wrapperInputRange);
            boxValueParent.classList.remove('my-3')
        }
    }

})();

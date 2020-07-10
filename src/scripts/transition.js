export function removeSplashUi() {
    const splashUi = document.getElementsByClassName("start-page")[0]
    splashUi.setAttribute("h" ,true)

}

export function addTrackingUi() {
    const trackUi = document.getElementsByClassName("tracking-page")[0]
    trackUi.setAttribute("h" ,false)
}

// export function zoom(ocean,projection,path) {

//     d3.transition()
//     // .delay(250)
//     .duration(3500)
//     .tween("rotate", function() {
//      const point = [-112.407,28.1087];
//      const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
     
//      return function(t) {
//          projection.rotate(rotatationGradient(t));
//         ocean.attr("d", path);
//       };
//     })


// d3.transition()
// .delay(2500)
// .duration(1000)
//     .tween("zoom",function(){
//         const point = [-112.407,28.1087];
//         const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
//         const scaleGradient = d3.interpolate(projection.scale(), 60000)
//         return function(t) {
//             projection.rotate(rotatationGradient(t));
//             projection.scale(scaleGradient(t))
//             ocean.attr("d", path);
//         };
//     })



// }


export function zoom(ocean,projection,path) {

    const twizzleLock = {};
    const plonkLock = {};

    ocean
        .call(rotate,3500,path)
        .call(zoomIn, 4000,path)


    function rotate(space, duration,path) {
        d3.select(twizzleLock).transition()
            .duration(duration)
            .tween("rotate", function() {
                const point = [-112.407,28.1087];
                const rotatationGradient = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
                
                return function(t) {
                    projection.rotate(rotatationGradient(t));
                   ocean.attr("d", path);
                 };
        
        })
    }

    function zoomIn(space, duration,path) {
            d3.select(plonkLock).transition()
                .ease(d3.easeExpIn)
                .duration(duration)
                .tween("zoom",function(){
                    const scaleGradient = d3.interpolate(projection.scale(), 60000)
                    return function(t) {
                        projection.scale(scaleGradient(t))
                        ocean.attr("d", path);
                    };
            
        })
    }
          
}


export function zoomOut(ocean,projection,path) {
    console.log("click")
  
        d3.transition()
        .duration(1000)
            .tween("zoom",function(){
                const scaleGradient = d3.interpolate(projection.scale(), 300)
                return function(t) {
                    projection.scale(scaleGradient(t))
                    ocean.attr("d", path);
                };
            })

          
}

// export function(test)





export function executeTransition(ocean,projection,path){
    removeSplashUi()
    zoom(ocean,projection,path)
    addTrackingUi()
}
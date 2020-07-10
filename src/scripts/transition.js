export function removeSplashUi() {
    const splashUi = document.getElementsByClassName("start-page")[0]
    splashUi.setAttribute("h" ,true)

}

export function addTrackingUi() {
    const trackUi = document.getElementsByClassName("tracking-page")[0]
    trackUi.setAttribute("h" ,false)
}

// export function zoom() {
//     const target = [-112.407,28.1087];

//     function zoomTo(location, scale) {
//         var point = projection(location);
//         return zoom
//            .translate([width / 2 - point[0] * scale, height / 2 - point[1] * scale])
//            .scale(scale);
//     }
    

// }
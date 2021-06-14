let imgs = document.getElementsByTagName("img");
for(var a = 0; a < imgs.length; a++){
    console.log(imgs);
    VanillaTilt.init(imgs[a], {
        max: 25,
        speed: 400
    });
}
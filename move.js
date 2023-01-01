let Previous_Images = [];
// Page-1

let index = () => {
    let Image_Btn = document.getElementById('Pic');
    let Web_start = document.getElementById('Start_cam');
    let Reset = document.getElementById('reset');

    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    const submit = document.getElementById("submit");
    const webcam = new Webcam(webcamElement, 'user', canvasElement);
    Web_start.addEventListener('click', () => {
        webcam.start()
            .then(result => {
                console.log("webcam started");
            })
            .catch(err => {
                console.log(err);
            });
    });
    Image_Btn.addEventListener("click", () => {
        let picture = webcam.snap();
        document.querySelector('#download-photo').href = picture;
        Previous_Images.push(picture);
    });


    Reset.addEventListener("click", () => {
        Previous_Images.pop();
    });

    submit.addEventListener("click", () => {
        localStorage.setItem('myArray', Previous_Images.join("!"));
    });
};


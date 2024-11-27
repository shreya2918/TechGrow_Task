let imgBox = document.getElementById("imgBox");
      let qrImage = document.getElementById("qrImage");
      let qrText = document.getElementById("qrText");

      function generateQR() {
        if(qrText.value.length > 0){
            qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
        }else{                                   //if for empty text pressing generate button, it is error. show shake animation.
            qrText.classList.add("error");
            setTimeout(()=>{
                qrText.classList.remove("error");  //shake animation should be removed after shaking
            },1000);
        }
        
      }
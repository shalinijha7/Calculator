if(e.target.innerHTML == "=" ){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if (e.target.innerHTML == "C"){
            string=" ";
            document.querySelector("input").value=string;
        }
        else if (e.target.innerHTML == "M+"){
            string=string+1;
            document.querySelector("input").value=string;
        }
        else if (e.target.innerHTML == "M-"){
            string=string-1;
            document.querySelector("input").value=string;
        }
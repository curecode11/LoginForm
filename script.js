    const container=document.querySelector(".container");
    const login=document.querySelector(".login");
    const btn=document.querySelector(".btn");
    const toggle=document.querySelector(".toggle");
    const headline=document.querySelector(".headline");
    let t=true;
    toggle.addEventListener("click",()=>{
        console.log("jai hind");
        
        if(t==true){
            headline.classList.remove("pink")
            btn.classList.remove("pink");
            document.body.classList.remove("light")
            container.classList.remove("light");
            container.classList.remove("borderblack");
            login.classList.remove("light");
            toggle.classList.remove("dark");
            
            headline.classList.add("grey")
            container.classList.add("dark");
            container.classList.add("borderlight");
            login.classList.add("dark");
            toggle.classList.add("light");
            document.body.classList.add("dark")
            btn.classList.add("grey");
            t=false;
        }
        else{
            headline.classList.remove("grey")
            document.body.classList.remove("dark")
            container.classList.remove("borderlight")
            container.classList.remove("dark");
            login.classList.remove("dark");
            toggle.classList.remove("light");
            btn.classList.remove("grey");

            headline.classList.add("pink")
            container.classList.add("light");
            login.classList.add("light");
            toggle.classList.add("dark");
            document.body.classList.add("light")
            container.classList.add("borderblack")
            btn.classList.add("pink");
            t=true;
        }
    })

    btn.addEventListener("click",()=>{
        const elem=document.createElement("h3");
        elem.innerHTML="Thanks for the submission 👍"
        container.append(elem);
        btn.disabled=true;
    })

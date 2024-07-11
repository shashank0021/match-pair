var emoji=["😒","😒","👌","👌","😂","😂","❤️","❤️","😍","😍","😘","😘","💕","💕","😁","😁"]
var suffle_emoji=emoji.sort(()=>(Math.random()>.5)?2:-1);
var count=0;


    for(let i=0;i<emoji.length;i++)
    {
        let box= document.createElement('div')
        box.className='item';
        box.innerHTML=suffle_emoji[i];

        box.onclick=function(){
            count=count+1;
            document.getElementById('count').innerHTML=count;
            this.classList.add("boxopen");
            setTimeout(function(){
                if(document.querySelectorAll('.boxopen').length>1)
                {
                    if(document.querySelectorAll('.boxopen')[0].innerHTML==document.querySelectorAll('.boxopen')[1].innerHTML){
                        document.querySelectorAll('.boxopen')[0].classList.add('boxmatch')
                        document.querySelectorAll('.boxopen')[1].classList.add('boxmatch')
                        document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
                        document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

                        if(document.querySelectorAll('.boxmatch').length==emoji.length)
                        {
                            alert("hurry ! you won")
                            window.location.reload()
                        }
                       
        

                    }
                    else{
                        document.querySelectorAll('.boxopen')[1].classList.remove('boxopen')
                    document.querySelectorAll('.boxopen')[0].classList.remove('boxopen')

                    }
                }

            },500)
        }



        document.querySelector('.card').appendChild(box)
    }





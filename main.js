window.addEventListener("load", ()=>{
    const grid = new Isotope("section",{ //배치할 요소를 감싼 부모요소명 
        itemSelector : "article", //배치할 요소명 
        columnWidth : "article", //너비값 구할 요소명 
        transitionDuration : "0.5s" // 화면 재배치시 요소가 움직이는 속도 
    });

    //sort기능 구현하기 
    //sort버튼 변수저장 
    const btns = document.querySelectorAll("main ul li"); 

    for(let el of btns){

        //sort버튼을 클릭했을 때 
        el.addEventListener("click", e=>{
            e.preventDefault(); 

            //클릭한 버튼의 a태그에서 href 속성값을 변수로 저장 
            const sort = e.currentTarget.querySelector("a").getAttribute("href"); 

            // sort값에 따라 재정렬하기 
            grid.arrange({
                filter : sort
            }); 

            //버튼 활성화 
            //모든 버튼을 순간적으로 비활성화하고 
            //클릭한 버튼만 활성화 
            for(let el of btns){
                el.classList.remove("on"); 
            }
            e.currentTarget.classList.add("on"); 
        })
    }








});


let btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
    let loding = document.getElementById("mainl");
    let con1 = document.getElementById("con");
    con1.style.display = "none";
    let count = document.querySelector(".counter");
    let bar = document.getElementById("loading-bar-front");
    let i = 0;
    lod();



    function lod() {
        count.innerText = i + "%";
        bar.style.width = i + "%";
        let p = 0;
        let qn = 0;

        i++;
        if (i < 101) {
            loding.style.display = "block";
            setTimeout(lod, 20);
        } else {
            // let con = document.getElementById("container");
            loding.style.display = "none";
            let cart = document.getElementById("cart");
            let check = document.querySelectorAll("input");
            let arr = [100, 150, 30, 50];
            check.forEach((w) => {
                if (w.checked) {
                    let r = w.value;
                    let div = document.createElement("div");

                    if (r === "Pizaa") {
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">1</p> 
            <p class="text">100/-</p>
            `;
                        p += arr[0];
                        qn++;
                        // idx.push(0);
                    }
                    else if (r === "Sandwich") {
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">1</p> 
            <p class="text">150/-</p>
            `;
                        p += arr[1];
                        qn++;
                    }
                    else if (r === "Panipuri") {
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">1</p> 
            <p class="text">30/-</p>
            `;
                        p += arr[2];
                        qn++;
                    }
                    else if (r === "Dabelii") {
                        div.innerHTML = `<p class="name">${w.value}</p>
             <p id="count">1</p> 
            <p class="text">50/-</p>
            `;
                        p += arr[3];
                        qn++;
                    }


                    cart.style.display = "block";
                    cart.append(div);

                }
                // console.log(idx);
            })
            let total = document.createElement("div");
            total.innerHTML = `<p class="totalm">Total : </p>
            <p class="total">${qn} </p>
            <p class="total">${p}/- </p>`
            cart.append(total)

            // console.log(p);
        }
    }
    // 
})
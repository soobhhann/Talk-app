window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const speech = new SpeechRecognition()
    speech.lang = "fa-IR"
    speech.interimResults = true

    speech.start()
    speech.addEventListener("end" , speech.start)
    let container = document.querySelector(".container")
    let p = document.createElement("p")
    let span = document.createElement("span")
    
    speech.addEventListener("result", e => {

        container.appendChild(p)

        let res = Array.from(e.results)
        .map(result => {
            return result[0]
        })
        .map(result => {
            return result.transcript
        }).join(' ')

        if(res.includes("علامت سوال")){
            res = res.replace("علامت سوال", "؟")
        }

        if(res.includes("صفحه آبی شود")){
            document.body.style = `background: blue`
        }

        span.textContent = res + " "
        p.appendChild(span)

        if(e.results[0].isFinal){
            span = document.createElement("span")
            p.appendChild(span)
        }


        console.log(res)
    })
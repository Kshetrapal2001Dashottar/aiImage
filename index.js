const submitIcon = document.querySelector('#submit-icon')

const generateImages = async () => {
    const inputElement = document.querySelector("input").value.trim()
    const option = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer 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`,
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement,
            "n": 4,
            "size": "1024x1024"
        })
    }
    try {
        if (!inputElement) {
            alert("Please Enter something");
            return;
        }
        const response = await fetch('https://api.openai.com/v1/images/generations', option)
        const data = await response.json();
        console.log(data)
        alert(data.error.code)
    } catch (error) {
        console.log(error)
    }
}


submitIcon.addEventListener('click', generateImages)
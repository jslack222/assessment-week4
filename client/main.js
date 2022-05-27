



const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// const baseURL = 'http://localhost:4000/api/question'


const errCallback = err => console.log(err.response.data)

// const createConvo = (body) =>
//   axios.post(baseURL, body).then(createConvos).catch(errCallback);

complimentBtn.addEventListener('click', getCompliment)

const fortuneButton = document.getElementById('fortuneButton')


const getFortune = () => {
    axios.get('http://localhost:4000/api/fortunes')
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

fortuneButton.addEventListener("click", getFortune);

const title = document.getElementById('title');

const displayConvo = () => {
    axios.get('http://localhost:4000/api/question')
        .then(res => {
            const data = res.data; 
            alert(data);
    })
}

title.addEventListener('submit', displayConvo)

const getPic = document.getElementById('getPic')

const getPicture = () => {
    axios.get("http://localhost:4000/api/picture").then((res) => {
    const data = res.data;
    alert(data);
  });
};

getPic.addEventListener('click', getPicture)

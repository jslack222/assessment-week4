module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A golden egg of opportunity falls into your lap this month.", "A faithful friend is a strong defense.", "A short pencil is usually better than a long memory any day.", "A soft voice may be awfully persuasive.", "Believe in yourself and others will too."]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    }, 
    createConvos: (req, res) => {
        const response = ['Sometimes life can good and sometimes it can be bad but dont forget your an awesome person', 'Do you enjoy submitting that response or are you trying to annoy me', 'dont press enter there press it here', 'im bored what were you saying again', 'stop it your hurting me']
        response.post(req.body)
        console.log(req.body);

        res.status(200).send('is this working')
        
    }, 

    getPicture: (req, res) => {
        const pictures = ['/images/alright-people-lets-do-this-motivational-memes.jpg', 'images/dont-worry-you-got-this-motivational-memes.jpg' ]
        
         let randomIndex = Math.floor(Math.random() * pictures.length);
         let randomPicture = pictures[randomIndex];
    
        res.status(200).send(randomPicture)
    }


}

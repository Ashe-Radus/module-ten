// this file is for generating the html with the given paramaters. 
// using the generate function to build the html file with the cards

const generateHTML = ({name, id, email}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="card">
        <img src="img_avatar.png" alt="Avatar" style="width:100%">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
</body>
</html>`;

const init = () => {
    promptUser()
    .then((ansewrs) => writeFile('index.html', generate(answers)))
    .then(() => console.log('Generated index.html'))
    .catch((err) => console.error(err));
};
init(); 
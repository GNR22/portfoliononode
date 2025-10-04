File structure: 
portfolio-app/
│── public/
│   ├── index.html   ← Pages will use this
│   ├── style.css
│   ├── script.js
│   └── images/
│── server.js
│── package.json

TAKE NOTE: You can't deploy this cuz github cannot locate public/index.html. It also cannot force locate it. In the near future, if you need this to be deployed either rename the "public" folder to "docs" or copy paste the index.html outside public folder. 

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    console.log(`Dom element is of type ${this.domElement} and expandButton is of type ${this.expandButton}`);
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.textContent = "expand";
    
    this.expandButton.addEventListener("click", e => {
      // expandArticle();
      this.domElement.height = "400px";
      this.expandArticle();
      console.log("expandArticle method called");
  });
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("expandArticle method called");
    this.domElement.classList.toggle('article-open');
  }


}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

// this.expandButton.addEventListener('click', this.expandArticle.bind(this));
//    // this.expandButton.addEventListener('click', () => this.togglePanel());
//  }

let articles = document.querySelectorAll('.article');


console.log(`# of articles: ${articles.length}`)

var classofarticles = new Array;
for ( i = 0; i < articles.length; i ++){

  // articles[i].style.display = "none";
  classofarticles[i] = new Article(articles[i]);
}
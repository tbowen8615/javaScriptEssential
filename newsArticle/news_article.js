var xhr = new XMLHttpRequest();

var url = './news_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) { // Ensure the request was successful
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        // Iterate over articles and create the DOM structure
        articles.forEach(function(article) {
            // Create the main container for each article
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Create and set the title
            var title = document.createElement('h2');
            title.textContent = article.title;

            // Create and set the description
            var description = document.createElement('p');
            description.textContent = article.description;

            // Create and set the "Ways to Achieve" section
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            if (Array.isArray(article.ways_to_achieve)) {
                article.ways_to_achieve.forEach(function(way) {
                    var listItem = document.createElement('li');
                    listItem.textContent = way;
                    waysList.appendChild(listItem);
                });
            } else {
                var noWaysItem = document.createElement('li');
                noWaysItem.textContent = 'No ways provided.';
                waysList.appendChild(noWaysItem);
            }

            // Create and set the "Benefits" section
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            if (Array.isArray(article.benefits)) {
                article.benefits.forEach(function(benefit) {
                    var listItem = document.createElement('li');
                    listItem.textContent = benefit;
                    benefitsList.appendChild(listItem);
                });
            } else {
                var noBenefitsItem = document.createElement('li');
                noBenefitsItem.textContent = 'No benefits provided.';
                benefitsList.appendChild(noBenefitsItem);
            }

            // Append all elements to the main article container
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Attach the article container to the main articles container
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Failed to fetch data. Status:', xhr.status);
    }
};

xhr.onerror = function() {
    console.error('An error occurred while making the request.');
};

xhr.send();

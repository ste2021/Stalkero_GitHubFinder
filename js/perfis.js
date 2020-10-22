const WPInfiniteScroll = (() => {

    // Basic Configuration
    const config = {
        api: 'https://razoesparaacreditar.com/wp-json/wp/v2/posts',
        startPage: 0, // 0 for the first page, 1 for the second and so on...
        postsPerPage: 5 // Number of posts to load per page
    };

    // Private Properties
    let postsLoaded = false;
    let postsContent = document.querySelector('.posts');
    let btnLoadMore = document.querySelector('.btn-load-more');

    // Private Methods
    const loadContent = function() {

        // Starts with page = 1
        // Increase every time content is loaded
        ++config.startPage;

        // Basic query parameters to filter the API
        // Visit https://developer.wordpress.org/rest-api/reference/posts/#arguments
        // For information about other parameters
        const params = {
            _embed: true, // Required to fetch images, author, etc
            page: config.startPage, // Current page of the collection
            per_page: config.postsPerPage, // Maximum number of posts to be returned by the API
        }

        // console.log('_embed', params._embed);
        // console.log('per_page', params.per_page);
        // console.log('page', params.page);

        // Builds the API URL with params _embed, per_page, and page
        const getApiUrl = (url) => {
            let apiUrl = new URL(url);
            apiUrl.search = new URLSearchParams(params).toString();
            return apiUrl;
        };

        // Make a request to the REST API
        const loadPosts = async() => {
            const url = getApiUrl(config.api);
            const request = await fetch(url);
            const posts = await request.json();

            // Builds the HTML to show the posts
            const postsHtml = renderPostHtml(posts);

            // Adds the HTML into the posts div
            postsContent.innerHTML += postsHtml;

            // Required for the infinite scroll
            postsLoaded = true;
        };

        // Builds the HTML to show all posts
        const renderPostHtml = (posts) => {
            let postHtml = '';
            for (let post of posts) {
                postHtml += postTemplate(post);
            };
            return postHtml;
        };

        // HTML template for a post
        const postTemplate = (post) => {
            return `
              <div id="post-${post.id}" class="post-item">
                <img src="${post._embedded['wp:featuredmedia'][0].source_url}" class="post-thumbnail" />
                <h3 class="post-title"><a href="${post.link}?utm_source=codepen&utm_medium=link" target="_blank">${post.title.rendered}</a></h3>
                <p class="post-content">${post.excerpt.rendered}</p>
              </div>`;
        };

        loadPosts();
    };

    // Where the magic happens
    // Checks if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {

        const loadMoreCallback = (entries, observer) => {
            entries.forEach((btn) => {
                if (btn.isIntersecting && postsLoaded === true) {
                    postsLoaded = false;
                    loadContent();
                }
            });
        };

        // Intersection Observer options
        const options = {
            threshold: 1.0 // Execute when button is 100% visible
        };

        let loadMoreObserver = new IntersectionObserver(loadMoreCallback, options);
        loadMoreObserver.observe(btnLoadMore);
    }

    // Public Properties and Methods
    return {
        init: loadContent
    };

})();

// Initialize Infinite Scroll
WPInfiniteScroll.init();
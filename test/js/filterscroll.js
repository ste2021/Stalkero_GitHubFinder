var infScroll = new InfiniteScroll('.lista', {
    path: function() {
        return users + '&page=' + this.page;
    },
    // load response as flat text
    responseType: 'text',
    status: '.scroll-status',
    history: false,
});
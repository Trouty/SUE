console.log("loaded: \"Shut Up EP!\"")

var target = document.querySelector('title');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation){
        var target = document.querySelector('title');
        observer.disconnect();

        document.title = "EP";

        observer.observe(target, { subtree: true, characterData: true, childList: true });
    })
});

observer.observe(target, { subtree: true, characterData: true, childList: true });
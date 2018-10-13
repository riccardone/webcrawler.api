module.exports = function (getUrls, parseDomain) {    
    var getLinks = function (doc, includeLink) {
        var urls = getUrls(doc)
        var domain = parseDomain(includeLink).domain
        var domainUrls = [];        
        urls.forEach(function (item) {
            var linkDomain = parseDomain(item);
            if (linkDomain && domain === linkDomain.domain) {
                domainUrls.push(item)
            } 
        })
        return domainUrls;
    }

    return {
        getLinks: getLinks
    }
}
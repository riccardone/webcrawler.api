let chai = require('chai')
let should = chai.should()
let GetUrls = require('get-urls')
let ParseDomain = require('parse-domain')    
let crawler = require('../crawlerService')(GetUrls, ParseDomain)

describe('getLinks return local links', () => {
    it('should return 1 link', function(){
        var links = crawler.getLinks('loren impsum http://www.ansa.it/news and http://www.google.com', 'http://www.ansa.it')        
        should.equal(links.length, 1)
  });
})
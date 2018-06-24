var proxyquire = require('proxyquire');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('service/helloWorldService.js', function() {
    
	beforeEach(function () {
        service = proxyquire(path.join(process.cwd(), 'app/service', 'helloWorldService'), {
            
		});
    });

    it('Should export the main function', function() {
		expect(service.invoke).to.exist;
	});
});
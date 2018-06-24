var proxyquire = require('proxyquire');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('processor/helloWorldProcessor.js', function() {
    
	beforeEach(function () {
        processor = proxyquire(path.join(process.cwd(), 'app/processor', 'helloWorldProcessor'), {
            
		});
    });

    it('Should export the main function', function() {
		expect(processor.invoke).to.exist;
	});
});
var proxyquire = require('proxyquire');
var path = require('path');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe('controller/helloWorldController.js', function() {
    
	beforeEach(function () {
        controller = proxyquire(path.join(process.cwd(), 'app/controller', 'helloWorldController'), {
            
		});
    });

    it('Should export the main function and the validation function', function() {
		expect(controller.invoke).to.exist;
		expect(controller.validation).to.exist;
	});
});
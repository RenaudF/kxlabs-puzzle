/* global describe, it, App */

(function () {
    'use strict';

    describe('KxLabs puzzle tests', function () {

        describe('Question 0', function () {
            it('should rotate an array of n elements to the right by k step', function () {
                expect(App.moduleMap.q0.rotate([1,2,3,4,5,6,7],3)).to.eql([5,6,7,1,2,3,4]);
            });
        });

        describe('Question 1', function () {
            var ptriplet = App.moduleMap.q1.findIntegerTripletWithLength(1000);
            ptriplet.sort((a,b)=>b-a);
            it('should be a pythagorean triplet', function () {
                expect(ptriplet[0]*ptriplet[0]).to.equal(ptriplet[1]*ptriplet[1]+ptriplet[2]*ptriplet[2]);
                expect(ptriplet.reduce((a,b)=>a*b,1)).to.be.above(0);
            });
            it('should be made of integers', function(){
                expect(ptriplet.every(a=>a===Math.floor(a))).to.be.true;
            });
            it('should sum up to 1000', function(){
                expect(ptriplet.reduce((a,b)=>a+b,0)).to.equal(1000);
            });
        });

        describe('Question 2', function(){
            it('should calculate factorial skipping every second number', function(){
                expect(App.moduleMap.q2.factorial(5)).to.equal(15);
            });
        });
    });
})();

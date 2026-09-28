import test from 'node:test';
import assert from 'node:assert/strict';
import {vehicles,price,recommend,money} from '../src/lib/catalog.ts';
test('quoted prices include factory packages and optional extras only when selected',()=>{
 assert.equal(price(vehicles[0]),2436000);assert.equal(price(vehicles[0],true),2494000);
 assert.equal(price(vehicles[1]),1222000);assert.equal(price(vehicles[2]),4060000);assert.equal(price(vehicles[3]),2820000);
});
test('recommendation respects a hard budget even when the preferred category does not fit',()=>{
 const results=recommend('travel',1500000,'comfort');assert.equal(results.length,1);assert.equal(results[0].id,'bolt');assert.ok(results.every(v=>price(v)<=1500000));
});
test('purpose weighting selects the specialist model with an open budget',()=>{
 for(const [purpose,id] of [['family','terra'],['city','bolt'],['travel','zenith'],['work','bastion']] as const) assert.equal(recommend(purpose,Infinity,'comfort')[0].id,id);
});
test('no eligible vehicles returns an empty list without inventing a match',()=>assert.deepEqual(recommend('family',100000,'space'),[]));
test('currency is retained from the source concept',()=>assert.equal(money(2436000),'2,436,000 UAH'));

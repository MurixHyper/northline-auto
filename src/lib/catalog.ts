export type Purpose = 'family' | 'city' | 'travel' | 'work';
export type Priority = 'space' | 'economy' | 'comfort';
export type Vehicle = {
  id: string; brand: string; model: string; type: string; purpose: Purpose; line: string;
  base: number; factory: number; factoryName: string; option: number; optionName: string;
  fuel: string; clearance: number; cargo: string; turn: string; reason: string; tradeoff: string;
  scores: Record<Purpose | Priority, number>; position: string;
};
// Fictional catalogue from the supplied concept. Prices remain in UAH; no currency conversion.
export const vehicles: Vehicle[] = [
 {id:'terra',brand:'Solvane',model:'Terra',type:'SUV',purpose:'family',line:'Room for the life you lead.',base:2340000,factory:96000,factoryName:'Family package',option:58000,optionName:'Driver assistance package',fuel:'6.8',clearance:195,cargo:'520 L',turn:'11.2 m',reason:'A 520-litre boot and generous ground clearance make room for family plans, big and small.',tradeoff:'Larger than a city hatchback. Try parking it on your test drive.',scores:{family:5,city:2,travel:3,work:1,space:4,economy:2,comfort:3},position:'0% 0%'},
 {id:'bolt',brand:'Kaion',model:'Bolt',type:'Hatchback',purpose:'city',line:'Make light work of the everyday.',base:1180000,factory:42000,factoryName:'City package',option:31000,optionName:'Media package',fuel:'5.9',clearance:165,cargo:'310 L',turn:'9.8 m',reason:'A compact footprint and a 9.8-metre turning circle keep daily city driving simple.',tradeoff:'Less room for luggage and lower ground clearance than the SUV.',scores:{family:2,city:5,travel:1,work:0,space:1,economy:5,comfort:1},position:'100% 0%'},
 {id:'zenith',brand:'Halveth',model:'Zenith',type:'Sedan',purpose:'travel',line:'Take the long way home.',base:3920000,factory:140000,factoryName:'Touring package',option:95000,optionName:'Panoramic roof',fuel:'7.9',clearance:150,cargo:'480 L',turn:'11.8 m',reason:'A spacious touring sedan for unhurried motorway miles and a more comfortable daily drive.',tradeoff:'The highest price in the collection and limited ground clearance.',scores:{family:3,city:1,travel:5,work:0,space:3,economy:0,comfort:5},position:'0% 100%'},
 {id:'bastion',brand:'Dornik',model:'Bastion',type:'Pickup',purpose:'work',line:'Ready for what comes next.',base:2710000,factory:110000,factoryName:'Utility package',option:47000,optionName:'Load bed protection',fuel:'10.4',clearance:238,cargo:'1,000 kg payload',turn:'12.8 m',reason:'A dedicated load bed and up to 1,000 kg of payload for the jobs that need more.',tradeoff:'Higher fuel consumption and a larger turning circle in tight city streets.',scores:{family:1,city:0,travel:2,work:5,space:5,economy:0,comfort:1},position:'100% 100%'}
];
export const price = (v: Vehicle, optional = false) => v.base + v.factory + (optional ? v.option : 0);
export const money = (n: number) => new Intl.NumberFormat('en-GB', {maximumFractionDigits:0}).format(n) + ' UAH';
export const fullName = (v: Vehicle) => `${v.brand} ${v.model}`;
export function recommend(purpose: Purpose, budget: number, priority: Priority) {
 return vehicles.filter(v=>price(v)<=budget).sort((a,b)=>(b.scores[purpose]*3+b.scores[priority])-(a.scores[purpose]*3+a.scores[priority]));
}

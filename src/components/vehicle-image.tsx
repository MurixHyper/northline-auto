import type { Vehicle } from '@/lib/catalog';
export function VehicleImage({vehicle}:{vehicle:Vehicle}) {return <div className="vehicle-image" role="img" aria-label={`AI concept illustration of the ${vehicle.brand} ${vehicle.model}`} style={{backgroundPosition:vehicle.position}}/>;}

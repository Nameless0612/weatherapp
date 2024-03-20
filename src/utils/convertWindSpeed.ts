/**@format */

export function convertWindSpeed(speedInMpS: number): string {
  const speedInKpH = speedInMpS * 3.6;
  return `${speedInKpH.toFixed(0)}km/h`;
}

import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axios-instance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/use-custom-toast';

// for when we need a query function for useQuery
// async function getTreatments(): Promise<Treatment[]> {
//   const { data } = await axiosInstance.get('/treatments');
//   return data;
// }

export function useTreatments(): Treatment[] {
  // TODO: get data from server via useQuery
  return [];
}

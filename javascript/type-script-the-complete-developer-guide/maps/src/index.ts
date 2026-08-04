/// <reference types="@types/google.maps" />
import { User } from './user';
import { Company } from './company';
import { CustomMap } from './custom-map';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// both user and company satisfy Mappable interface
customMap.addMarker(user);
customMap.addMarker(company);

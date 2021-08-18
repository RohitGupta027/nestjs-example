import { HttpService, Injectable } from '@nestjs/common';
import { Space } from './space.interface';

@Injectable()
export class SpaceService {
  constructor(private httpService: HttpService) {}

  async getAstronauts(): Promise<Space> {
    const response = await this.httpService
      .get('http://api.open-notify.org/astros.json')
      .toPromise();
    return response.data;
  }
}

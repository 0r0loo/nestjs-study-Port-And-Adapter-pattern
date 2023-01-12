import { Controller, Get, Inject } from '@nestjs/common';
import { MemoryDatabase } from '../../lib/memory-database';
import {
  FIND_MEMBERS_INBOUND_PORT,
  FindMembersInboundPort,
} from '../inbound-port/find-membersinbound-port';

@Controller()
export class GetMembersController {
  constructor(
    @Inject(FIND_MEMBERS_INBOUND_PORT)
    private readonly findMembersInboundPort: FindMembersInboundPort,
  ) {}
  @Get('/members')
  async handler() {
    return this.findMembersInboundPort.execute();
  }
}

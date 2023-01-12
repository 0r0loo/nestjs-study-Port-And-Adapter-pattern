import { Module } from '@nestjs/common';
import { GetMembersController } from './controller/get-members.controller';
import { FIND_MEMBERS_INBOUND_PORT } from './inbound-port/find-membersinbound-port';
import { FindMembersService } from './service/find-members.service';
import { FIND_MEMBERS_OUTBOUND_PORT } from './outbound-port/find-members.outbound-port';
import { FindMembersRepository } from './outbound-adapter/find-members.repository';

@Module({
  controllers: [GetMembersController],
  providers: [
    {
      provide: FIND_MEMBERS_INBOUND_PORT,
      useClass: FindMembersService,
    },
    {
      provide: FIND_MEMBERS_OUTBOUND_PORT,
      useClass: FindMembersRepository,
    },
  ],
})
export class MemberModule {}

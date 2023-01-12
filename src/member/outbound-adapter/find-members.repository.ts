import { FindMembersOutboundPort } from '../outbound-port/find-members.outbound-port';
import {
  FindMembersInboundPortInputDto,
  FindMembersInboundPortOutputDto,
} from '../inbound-port/find-membersinbound-port';
import { Member, MemoryDatabase } from '../../lib/memory-database';

export class FindMembersRepository implements FindMembersOutboundPort {
  async execute(
    params: FindMembersInboundPortInputDto,
  ): Promise<FindMembersInboundPortOutputDto> {
    const members = await MemoryDatabase.findMembers();

    return members.map((member: Member) => {
      return {
        name: member.name,
        email: member.email,
        phone: member.phone,
      };
    });
  }
}

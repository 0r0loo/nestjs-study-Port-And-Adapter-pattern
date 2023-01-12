import { FindMembersService } from './find-members.service';
import {
  FindMembersOutboundPort,
  FindMembersOutboundPortInputDto,
  FindMembersOutboundPortOutputDto,
} from '../outbound-port/find-members.outbound-port';
import { FindMembersInboundPortOutputDto } from '../inbound-port/find-membersinbound-port';

class MockFindMembersOutboundPort implements FindMembersOutboundPort {
  private readonly result: FindMembersInboundPortOutputDto;

  constructor(result: FindMembersOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: FindMembersOutboundPortInputDto,
  ): Promise<FindMembersOutboundPortOutputDto> {
    return this.result;
  }
}

describe('FindMemberService Spec', () => {
  test('멤버 리스트를 반환한다', async () => {
    const member = [{ name: 'A', email: 'A@gmail.com', phone: '01012345678' }];
    const findMemberService = new FindMembersService(
      new MockFindMembersOutboundPort(member),
    );
    const result = await findMemberService.execute();

    expect(result).toStrictEqual([
      { name: 'A', email: 'A@gmail.com', phone: '01012345678' },
    ]);
  });
});

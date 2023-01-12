import { Get } from '@nestjs/common';

export class MemberController {
  @Get()
  findMembers() {
    return;
  }
}

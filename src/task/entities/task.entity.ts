import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  descr: string;
  @ApiProperty()
  complited: boolean;
}

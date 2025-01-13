import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  descr: string;

  @ApiProperty()
  complited: boolean;
}

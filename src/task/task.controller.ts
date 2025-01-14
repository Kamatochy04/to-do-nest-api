import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('todo')
@Controller('task')
export class TaskController {
  @ApiBody({ type: CreateTaskDto })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get all todo',
    type: [Task],
  })
  findAll() {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get one todo',
    type: Task,
  })
  findOne(@Param('id') id: string) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}

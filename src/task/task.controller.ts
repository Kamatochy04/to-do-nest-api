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
  // constructor(private readonly taskService: TaskService) {}
  // @ApiBody({ type: CreateTaskDto })
  // @Post()
  // create(@Body() createTaskDto: CreateTaskDto) {
  //   return this.taskService.create(createTaskDto);
  // }
  // @Get()
  // @ApiResponse({
  //   status: 200,
  //   description: 'Get all todo',
  //   type: [Task],
  // })
  // findAll() {
  //   return this.taskService.findAll();
  // }
  // @Get(':id')
  // @ApiResponse({
  //   status: 200,
  //   description: 'Get one todo',
  //   type: Task,
  // })
  // findOne(@Param('id') id: string) {
  //   return this.taskService.findOne(id);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.taskService.update(id, updateTaskDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.taskService.remove(id);
  // }
}

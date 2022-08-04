import { IsString } from 'class-validator';

export class CreateServiceCallDto {
  @IsString()
  content: string;
}

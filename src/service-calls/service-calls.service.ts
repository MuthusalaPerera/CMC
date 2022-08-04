import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {ServiceCall as Service} from "./service-call.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { CreateServiceCallDto } from './dtos/create-service-call.dto';

@Injectable()
export class ServiceCallsService {
    constructor(@InjectRepository(Service) private readonly serviceRepository:Repository<Service>) {}

    createUser(createServiceCallDto:CreateServiceCallDto){
        const newService= this.serviceRepository.create(createServiceCallDto)
        return this.serviceRepository.save(newService)
    }

    find() {
        return this.serviceRepository.find();
    }
}

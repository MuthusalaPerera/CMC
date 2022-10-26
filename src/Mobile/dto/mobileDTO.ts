// import {ServiceCall} from "../../service-calls/service-call.entity"
// import {Injectable} from "@nestjs/common"
// import {CustomerDto} from "../../Customer/dtos/customer.dto"
// @Injectable()
// export class ServiceCallsService {
//     async createUser(customerDto: CustomerDto) {
//         // console.log(CustomerDto)
//         const c = await this.getCustomerById(customerDto.CustomerId)
//         if (!c) {
//             const customer = await this.customerDtoRepository.save({...customerDto})
//             for (const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)) {
//                 ServiceCall.customerEntity = customer
//                 const item = await this.findByItemId(ServiceCall.itemEntity.ItemCode)
//                 console.log(item)
//                 if (!item) {
//                     await this.itemEntityRepository.save(ServiceCall.itemEntity)
//                     await this.serviceRepository.save({...ServiceCall})
//                 } else {
//                     await this.itemEntityRepository.create(ServiceCall.itemEntity)
//                     await this.serviceRepository.save({...ServiceCall})
//                 }
//
//             }
//             return customer
//         } else {
//             const customer = await this.customerDtoRepository.create({...customerDto})
//             for (const ServiceCall of this.serviceRepository.create(customerDto.serviceCalls)) {
//                 // console.log(ServiceCall)
//                 const s = await this.findById(ServiceCall.ServiceCallId)
//                 if (!s) {
//                     ServiceCall.customerEntity = customer
//                     await this.itemEntityRepository.save(ServiceCall.itemEntity)
//                     // console.log(ServiceCall)
//                     await this.serviceRepository.save({...ServiceCall})
//                 }
//             }
//             return customer
//         }
//     }
// }

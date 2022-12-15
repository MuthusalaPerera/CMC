// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { inventory } from './inventory.entity';

// @Injectable()
// export class InventoryService {
//     constructor(@InjectRepository(inventory) private repo: Repository<inventory>){}

//     create ( id:number, SPID: string, ItemDescription: string, ItemType: string, Remarks: string, AvailableQuantity: number, Attachment: string){
//         const inventory = this.repo.create({ id, SPID, ItemDescription, ItemType, Remarks, AvailableQuantity, Attachment });

//         return this.repo.save(inventory);

//     }

//     findOne(id: number){
//         return this.repo.findOne(id);
//     }

//     find(SPID: string){
//         return this.repo.find({ SPID});
//     }

//     //
//     // async update(id: number, attrs: Partial<User>) {
//     //     const user = await this.findOne(id);
    
//     //     if (!user) {
//     //       throw new Error('User not found.');
//     //     }
    
//     //     Object.assign(user, attrs);
//     //     return this.repo.save(user);
//     //   }
    
//     //   async remove(id: number) {
//     //     const user = await this.findOne(id);
    
//     //     if (!user) {
//     //       throw new Error('User not found.');
//     //     }
    
//     //     return this.repo.remove(user);
//     //   }

// }

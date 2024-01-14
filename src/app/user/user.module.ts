import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';


export function logger() {
  console.log("I AM CALLED");
}

@Module({
  controllers: [UserController],
  //THIS USERSERVICE IS A NEW INSTANCE 
  providers: [UserService], //new UserService().users = [ { name: 'Manouna', notified: true } ]
  //REMOVE IT FROM THE NOTIFICATION MODULE
  exports: [UserService]
})
export class UserModule {}

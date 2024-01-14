import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class NotificationService {
  //YOU HAVE TO REGISTER USERSERVICE IN NOTIFICATION.MODULE IN THE PROVIDERS
  constructor(private readonly userService: UserService){}

  notifyUser() 
  {
    const users = this.userService.findNotificationEnabled();
    // console.log(users);
    for(const user of users)
    {
      console.log(`HEY ${user.name}, NEW CONTENT HAS BEEN UPLOADED`);
    }
  }
}

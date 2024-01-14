import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [NotificationController],
  providers: [NotificationService], //new UserService().users = []
})
export class NotificationModule {}

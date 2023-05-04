import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repositories';
import { MessagesService } from './messages.service';

@Module({
    providers: [MessagesRepository, MessagesService],
    controllers: [MessagesController]
})
export class MessagesModule { }

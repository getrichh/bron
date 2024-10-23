import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        await this.$connect();  // Подключение к базе данных
    }

    async onModuleDestroy() {
        await this.$disconnect();  // Отключение от базы данных при завершении работы
    }
}
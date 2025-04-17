import { Injectable } from '@nestjs/common';
import { PrismaService } from '@libs/database';
import { ICustomerRepository } from 'src/lib/domain/interfaces/customer.interface.repository';
import { Customer } from 'src/lib/domain/entities/customer.entity';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
    constructor(private prismaService: PrismaService) { }

    async create(name: string, email: string, address: string): Promise<Customer> {
        const customer = await this.prismaService.customer.create({
            data: { name, email, address },
        });
        return new Customer(
            customer.id,
            customer.name,
            customer.email,
            customer.address,
            customer.createdAt,
            customer.updatedAt,
        );
    }

    async findById(id: string): Promise<Customer> {
        const customer = await this.prismaService.customer.findUnique({
            where: { id },
        });
        return new Customer(
            customer.id,
            customer.name,
            customer.email,
            customer.address,
            customer.createdAt,
            customer.updatedAt,
        );
    }

    async findAll(): Promise<Customer[]> {
        const customers = await this.prismaService.customer.findMany();
        return customers.map(
            (customer) =>
                new Customer(
                    customer.id,
                    customer.name,
                    customer.email,
                    customer.address,
                    customer.createdAt,
                    customer.updatedAt,
                ),
        );
    }
}
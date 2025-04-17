import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCustomerCommand } from 'src/lib/application/commands/create-customer.command';
import { ICustomerRepository } from 'src/lib/domain/interfaces/customer.interface.repository';
import { Customer } from 'src/lib/domain/entities/customer.entity';

@CommandHandler(CreateCustomerCommand)
export class CreateCustomerCommandHandler implements ICommandHandler<CreateCustomerCommand> {
    constructor(private customerRepository: ICustomerRepository) { }

    async execute(command: CreateCustomerCommand): Promise<Customer> {
        const { name, email, address } = command;
        return this.customerRepository.create(name, email, address);
    }
}
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetCustomersQuery } from 'src/lib/application/queries/get-customers.query';
import { ICustomerRepository } from 'src/lib/domain/interfaces/customer.interface.repository';
import { Customer } from 'src/lib/domain/entities/customer.entity';

@QueryHandler(GetCustomersQuery)
export class GetCustomersQueryHandler implements IQueryHandler<GetCustomersQuery> {
    constructor(private customerRepository: ICustomerRepository) { }

    async execute(query: GetCustomersQuery): Promise<Customer[]> {
        return this.customerRepository.findAll();
    }
}